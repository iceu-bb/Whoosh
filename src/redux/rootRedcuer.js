import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import modalReducer from './modal/modalReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  modals: modalReducer,
  form: formReducer
});

export default rootReducer;
