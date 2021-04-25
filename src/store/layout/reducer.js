import * as actionTypes from './actionTypes';
import updateObject from '../utility';

const initialState = {
  loading: false,
  message: null,
  error: null,
};

const layout = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MESSAGE:
      return updateObject(state, {
        message: action.payload.message,
        loading: false,
      });
    case actionTypes.HIDE_MESSAGE:
      return updateObject(state, { message: null });
    case actionTypes.SHOW_ERROR:
      return updateObject(state, {
        error: action.payload.error,
        loading: false,
      });
    case actionTypes.HIDE_ERROR:
      return updateObject(state, { error: null });
    case actionTypes.SHOW_LOADING:
      return updateObject(state, { loading: true });
    case actionTypes.HIDE_LOADING:
      return updateObject(state, { loading: false });
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default layout;
