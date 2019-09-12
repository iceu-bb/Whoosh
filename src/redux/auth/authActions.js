import { SubmissionError } from 'redux-form';
import { closeModal } from '../modal/modalActionts';

export const registerAccount = values => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password);
    console.log(createdUser);
    await createdUser.user.updateProfile({
      displayName: values.displayName
    });
    let newUser = {
      displayName: values.displayName,
      createdAt: firestore.FieldValue.serverTimestamp()
    };
    await firestore.set(`users/${createdUser.user.uid}`, { ...newUser });
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}
    `);
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
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password);
    dispatch(closeModal());
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
    window.alert('Zostałeś poprawnie wylogowany!');
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
    window.alert(`Logged in successfully`);
  } catch (error) {
    console.log(error);
  }
};
