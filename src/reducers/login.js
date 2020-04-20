import {
  SET_PASSWORD,
  SET_EMAIL,
  SET_LOADER,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  email: '',
  password: '',
  error: null,
  auth: false,
  message: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: true,
        message: action.messageError,
        isLoading: action.isLoading,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: false,
        auth: true,
        isLoading: action.isLoading,
      };
    case SET_LOADER:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
