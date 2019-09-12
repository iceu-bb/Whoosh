import { FETCH_CATEGORY } from './constants';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from '../async/asyncActions';

export const fetchCategory = collectionName => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  try {
    dispatch(asyncActionStart());

    let categoryRef = firestore
      .collection('categories')
      .doc('collections')
      .collection(`${collectionName}`);

    let documentSnapshot = await categoryRef.get();

    let data = [];
    for (let i = 0; i < documentSnapshot.docs.length; i++) {
      let card = {
        ...documentSnapshot.docs[i].data(),
        id: documentSnapshot.docs[i].id
      };
      data.push(card);
    }

    dispatch({ type: FETCH_CATEGORY, payload: data });
    dispatch(asyncActionFinish());
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
  }
};
