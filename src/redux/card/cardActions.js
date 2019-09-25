import { toastr } from 'react-redux-toastr';

export const addCard = (values, categoryName) => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const firestore = getFirestore();
  const firebase = getFirebase();
  const user = firebase.auth().currentUser;
  const [english, polish] = [values.english.trim(), values.polish.trim()];

  // 1) add new Card to Category
  try {
    await firestore.collection(`${categoryName}_words`).add({
      english,
      polish,
      author: user.displayName,
      authorId: user.uid,
      createdAt: firestore.FieldValue.serverTimestamp()
    });

    // 2) increment cardCounter
    await firestore.update(`categories/${categoryName}`, {
      cardCounter: firestore.FieldValue.increment(1)
    });

    toastr.success('Sukces', 'Fiszka została dodana');
  } catch (error) {
    toastr.error('Błąd', 'Problem z dodaniem fiszki');
  }
};

export const removeCard = (categoryName, cardId) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  try {
    // 1) delete doc
    await firestore.delete(`${categoryName}_words/${cardId}`);

    // 2) update cardCounter
    await firestore.update(`categories/${categoryName}`, {
      cardCounter: firestore.FieldValue.increment(-1)
    });

    toastr.success('Sukces', 'Fiszka została usunięta');
  } catch (error) {
    toastr.error('Bład', 'Nie udało się usunąć fiszki');
  }
};

export const updateCard = (values, categoryName, cardId) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const [english, polish] = [values.english.trim(), values.polish.trim()];
  try {
    await firestore.update(`${categoryName}_words/${cardId}`, {
      english,
      polish
    });
  } catch (error) {
    toastr.error('Bład', 'Wystąpił problem podczas edycji fiszki');
  }
};
