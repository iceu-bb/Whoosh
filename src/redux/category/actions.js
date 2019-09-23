import {
  FETCH_CATEGORY_ITEMS,
  FETCH_CATEGORY_LIST,
  SEARCH_CATEGORIES,
  GET_USER_CATEGORIES
} from './constants';
import { toastr } from 'react-redux-toastr';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from '../async/asyncActions';
import fuzzy from 'fuzzy';

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
    dispatch({ type: FETCH_CATEGORY_LIST, payload: data });
    dispatch(asyncActionFinish());
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
  }
};

export const subscribeCollectionChanges = (
  collectionName,
  setUnsubscribe
) => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  try {
    let data = [];
    const unsubscribe = firestore
      .collection(`${collectionName}_words`)
      .onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        // listening for changes
        changes.forEach(change => {
          if (change.type === 'added') {
            // add flashcard
            let card = {
              ...change.doc.data(),
              id: change.doc.id
            };
            data.push(card);
          } else if (change.type === 'removed') {
            // filter deleted document
            data = data.filter(el => el.id != change.doc.id);
          } else if (change.type === 'modified') {
            //find item and update english and polish words
            let item = data.find(el => el.id === change.doc.id);
            item.english = change.doc.data().english;
            item.polish = change.doc.data().polish;
          }
          dispatch({ type: FETCH_CATEGORY_ITEMS, payload: data });
        });
      });
    setUnsubscribe(unsubscribe);
  } catch (error) {
    console.log(error);
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

export const addCategory = (values, image) => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const storage = firebase.storage();
  const user = firebase.auth().currentUser;
  const categoryName = values.name;
  try {
    dispatch(asyncActionStart());
    // 1) upload image to firebase Storage
    const uploadedFile = await storage
      .ref(`images`)
      .child(`${categoryName}_photo`)
      .put(image);

    // 2) take image URL
    const imageURL = await uploadedFile.ref.getDownloadURL();

    // 3) create document in a collection of categories
    await firestore
      .collection('categories')
      .doc(`${categoryName}`)
      .set({
        name: categoryName,
        author: user.displayName,
        authorId: user.uid,
        createdAt: firestore.FieldValue.serverTimestamp(),
        private: false,
        editable: true,
        cardCounter: 1,
        imagePath: imageURL
      });

    // 4) create data for collection with pattern: categoryName_words
    await firestore.add(`${categoryName}_words`, {
      author: user.displayName,
      authorId: user.uid,
      createdAt: firestore.FieldValue.serverTimestamp(),
      english: 'Naciśnij, żeby zobaczyć jak działają fiszki',
      polish: 'Przejdź niżej by zobaczyć jakie masz opcje'
    });
    dispatch(asyncActionFinish());
    toastr.success('Sukces', 'Zestaw został dodany');
  } catch (error) {
    dispatch(asyncActionFinish());
    toastr.error('Bład', 'Problem z dodaniem zestawu');
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
  const { english, polish } = values;
  try {
    await firestore.update(`${categoryName}_words/${cardId}`, {
      english,
      polish
    });
  } catch (error) {
    toastr.error('Bład', 'Wystąpił problem podczas edycji fiszki');
  }
};

export const searchCategory = value => (dispatch, getState) => {
  const categories = getState().category.categoriesList;
  const listOfCategoriesName = categories.map(category => category.name);
  let fuzzyResults = fuzzy
    .filter(value, listOfCategoriesName, {})
    .map(result => result.string);
  const data = categories.filter(category =>
    fuzzyResults.includes(category.name)
  );
  dispatch({
    type: SEARCH_CATEGORIES,
    payload: data
  });
};

export const getUserCategories = userId => (dispatch, getState) => {
  const categories = getState().category.categoriesList;
  try {
    const data = categories.filter(item => item.authorId === userId);
    dispatch({
      type: GET_USER_CATEGORIES,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = categoryName => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const storage = firebase.storage();
  const batch = firestore.batch();
  const categories = getState().category.categoriesList;
  const userId = firebase.auth().currentUser.uid;
  try {
    dispatch(asyncActionStart());
    // 1) delete category doc
    await firestore.delete(`categories/${categoryName}`);

    // 2) delete category photo from storage
    await storage
      .ref(`images`)
      .child(`${categoryName}_photo`)
      .delete();

    // 3) batch deleting all documents from category words
    const categorySnapshot = await firestore
      .collection(`${categoryName}_words`)
      .get();

    for (let i = 0; i < categorySnapshot.docs.length; i++) {
      batch.delete(categorySnapshot.docs[i].ref);
    }
    batch.commit();

    // 4) update redux state - all categories
    const data = categories.filter(item => item.name !== categoryName);
    dispatch({
      type: FETCH_CATEGORY_LIST,
      payload: data
    });

    // update redux state - user categories
    const data2 = data.filter(item => item.authorId === userId);
    dispatch({
      type: GET_USER_CATEGORIES,
      payload: data2
    });

    dispatch(asyncActionFinish());
    toastr.success('Sukces', 'Zestaw został usunięty');
  } catch (error) {
    dispatch(asyncActionError());
    toastr.error('Bład', 'Nie udało się usunąć zestawu');
  }
};

export const cleanCurrentCategoryItems = () => dispatch => {
  const data = [];
  dispatch({
    type: FETCH_CATEGORY_ITEMS,
    payload: data
  });
};
