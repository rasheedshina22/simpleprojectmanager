import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../actions/types';

const initialState = {
  projects: [
    {
      id: '1',
      title: 'help me fetch water',
      content: 'blah blah blah',
    },
    {
      id: '2',
      title: 'help me fetch wood',
      content: 'blah blah blah',
    },
    {
      id: '3',
      title: 'help me clean the house',
      content: 'blah blah blah',
    },
  ],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log('created', action.payload);
      return state;

    case CREATE_PROJECT_ERROR:
      console.log('create project error', action.err);
      return state;

    default:
      return state;
  }
};

export default projectReducer;
