import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  SIGN_UP_ERROR,
  AUTH_ERROR,
} from '../actions/types';
const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ERROR:
      console.log('login fail');

      return {
        ...state,
        authError: action.err.message,
      };

    case SIGN_IN:
      console.log('login success');
      return {
        ...state,
        authError: null,
      };
    case SIGN_OUT:
      console.log('signout success');
      return {
        state,
      };

    case SIGN_UP:
      console.log('signup success');
      return {
        ...state,
        authError: null,
      };

    case SIGN_UP_ERROR:
      console.log('signup error');
      return {
        ...state,
        authError: action.err.message,
        // on the error object return we get a property called message
      };

    default:
      return state;
  }
};

export default authReducer;
