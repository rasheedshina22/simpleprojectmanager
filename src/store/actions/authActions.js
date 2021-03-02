import { SIGN_IN, SIGN_OUT, SIGN_UP, SIGN_UP_ERROR, AUTH_ERROR } from './types';

export const signIn = (credentials) => (
  dispacth,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => {
      dispacth({
        type: SIGN_IN,
      });
    })
    .catch((err) => {
      dispacth({
        type: AUTH_ERROR,
        err: err,
      });
    });
};

export const signOut = () => (dispacth, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispacth({
        type: SIGN_OUT,
      });
    });
};

export const signup = (newUser) => (
  dispacth,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then((res) => {
      return firestore
        .collection('users')
        .doc(res.user.uid)
        .set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          //we can just get the initials when we get our lastname and firstname in our component
          initials: newUser.firstName[0] + newUser.lastName[0],
        });
    })
    .then(() => {
      dispacth({
        type: SIGN_UP,
      });
    })
    .catch((err) => {
      dispacth({
        type: SIGN_UP_ERROR,
        err: err,
      });
    });
};
