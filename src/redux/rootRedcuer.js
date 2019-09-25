import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { reducer as formReducer } from 'redux-form';
import { reducer as ToastrReducer } from 'react-redux-toastr';
import modalReducer from './modal/modalReducer';
import categoryReducer from './category/categoryReducer';
import asyncReducer from './async/asyncReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  modals: modalReducer,
  form: formReducer,
  category: categoryReducer,
  async: asyncReducer,
  toastr: ToastrReducer
});

export default rootReducer;
