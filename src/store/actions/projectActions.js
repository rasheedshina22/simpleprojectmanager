import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../actions/types';
export const createProject = (project) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  //make a async request or a call to the database
  const firestore = getFirestore();
  const profile = getState().firebase.profile;
  const authorId = getState().firebase.auth.uid;
  firestore
    .collection('projects')
    .add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastname: profile.lastName,
      authorId,
      createdAt: new Date(),
    })
    // we could have used async and await
    .then(() => {
      dispatch({
        type: CREATE_PROJECT,
        payload: project,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_PROJECT_ERROR,
        err,
      });
    });
};
