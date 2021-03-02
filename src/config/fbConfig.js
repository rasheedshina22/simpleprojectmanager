import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyCKaHTRJPBfnC7Uk-DTZ45wq9xz7r4wcMA',
  authDomain: 'react-redux-firebase-c9c6e.firebaseapp.com',
  databaseURL: 'https://react-redux-firebase-c9c6e.firebaseio.com',
  projectId: 'react-redux-firebase-c9c6e',
  storageBucket: 'react-redux-firebase-c9c6e.appspot.com',
  messagingSenderId: '647670912149',
  appId: '1:647670912149:web:57133060b1dd40aa1df79c',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
