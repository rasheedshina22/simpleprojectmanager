import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
// to sync to firestore
import { firestoreReducer } from 'redux-firestore';
//to sync authentication status
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
