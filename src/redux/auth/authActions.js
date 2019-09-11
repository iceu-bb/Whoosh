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
