/* eslint-disable arrow-body-style */
import * as actionTypes from './actionTypes';
import updateObject from '../utility';

const initialState = {
  shortenedUrl: null,
};

const fetchApiSuccess = (state, action) => {
  return updateObject(state, {
    [action.key]: action.payload,
    loading: false,
    error: null,
  });
};

const apiFailed = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.payload,
  });
};

const others = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_API_SUCCESS:
      return fetchApiSuccess(state, action);
    case actionTypes.API_FAILED:
      return apiFailed(state, action);
    default:
      return state;
  }
};

export default others;
