import { FETCH_CATEGORY_ITEMS, FETCH_CATEGORY_LIST } from './constants';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from '../async/asyncActions';

// Couldn't fetch subcollections on client -  so there will be separate collection with flashcard words data for every category with pattern: categoryName_words

export const fetchCategoriesList = () => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  try {
    dispatch(asyncActionStart());
    let categoryRef = firestore.collection('categories');
    let documentsSnapshot = await categoryRef.get();

    let data = [];
    for (let i = 0; i < documentsSnapshot.docs.length; i++) {
      let card = {
        ...documentsSnapshot.docs[i].data(),
        id: documentsSnapshot.docs[i].id
      };
      data.push(card);
    }
    console.log(data);
    dispatch({ type: FETCH_CATEGORY_LIST, payload: data });
    dispatch(asyncActionFinish());
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
  }
};

export const fetchCategoryItems = collectionName => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  try {
    dispatch(asyncActionStart());
    let categoryRef = firestore.collection(`${collectionName}_words`);
    let documentSnapshot = await categoryRef.get();

    let data = [];
    for (let i = 0; i < documentSnapshot.docs.length; i++) {
      let card = {
        ...documentSnapshot.docs[i].data(),
        id: documentSnapshot.docs[i].id
      };
      data.push(card);
    }
    console.log(data);
    dispatch({ type: FETCH_CATEGORY_ITEMS, payload: data });
    dispatch(asyncActionFinish());
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
  }
};

export const addCard = (values, categoryName) => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const firestore = getFirestore();
  const firebase = getFirebase();
  const user = firebase.auth().currentUser;
  const { english, polish } = values;
  try {
    await firestore.collection(`${categoryName}_words`).add({
      english,
      polish,
      author: user.displayName,
      authorId: user.uid,
      createdAt: firestore.FieldValue.serverTimestamp()
    });
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = values => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const firestore = getFirestore();
  const firebase = getFirebase();
  const user = firebase.auth().currentUser;
  const categoryName = values.name;
  try {
    // 1) create document in a collection of categories
    await firestore
      .collection('categories')
      .doc(`${categoryName}`)
      .set({
        name: categoryName,
        author: user.displayName,
        authorId: user.uid,
        createdAt: firestore.FieldValue.serverTimestamp(),
        private: false,
        editable: true
      });

    // 2) create data for collection with pattern: categoryName_words
    await firestore.add(`${categoryName}_words`, {
      init: true
    });

    console.log('pomyślnie utworzono');
  } catch (error) {
    console.log(error);
  }
};
