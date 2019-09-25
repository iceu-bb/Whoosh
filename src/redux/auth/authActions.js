import { SubmissionError, reset } from 'redux-form';
import { toastr } from 'react-redux-toastr';
import { closeModal } from '../modal/modalActionts';

export const registerAccount = values => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const [email, password, displayName] = [
    values.email.trim(),
    values.password,
    values.displayName.trim()
  ];
  try {
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await createdUser.user.updateProfile({
      displayName
    });
    let newUser = {
      displayName: displayName,
      createdAt: firestore.FieldValue.serverTimestamp()
    };
    await firestore.set(`users/${createdUser.user.uid}`, { ...newUser });
    dispatch(closeModal());
  } catch (error) {
    console.log(error);
    throw new SubmissionError({
      _error: error.message
    });
  }
};

export const loginUser = values => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  const [email, password] = [values.email.trim(), values.password];
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch(closeModal());
    toastr.success('Sukces', 'Zalogowano pomyślnie');
  } catch (error) {
    console.log(error);
    throw new SubmissionError({
      _error: 'Wprowadziłeś niepoprawne dane. Spróbuj Ponownie.'
    });
  }
};

export const logoutUser = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.logout();
  } catch (error) {
    console.log(error);
  }
};

export const socialLogin = selectedProvider => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    dispatch(closeModal());
    let user = await firebase.login({
      provider: selectedProvider,
      type: 'popup'
    });
    // Take user name from provider site
    if (user.additionalUserInfo.isNewUser) {
      await firestore.set(`users/${user.user.uid}`, {
        displayName: user.profile.displayName,
        createdAt: firestore.FieldValue.serverTimestamp()
      });
    }
    toastr.success('Sukces', 'Zalogowano pomyślnie');
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = values => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  const user = firebase.auth().currentUser;
  const { password1 } = values;
  try {
    await user.updatePassword(password1);
    await dispatch(reset('passwordChange'));
    toastr.success('Sukces', 'Pomyślnie zmieniono hasło');
  } catch (error) {
    throw new SubmissionError({
      _error: error.message
    });
  }
};
