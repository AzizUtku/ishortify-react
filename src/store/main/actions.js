import * as actionTypes from './actionTypes';

export const mainFetchApiSuccess = (key, payload) => ({
  type: actionTypes.FETCH_API_SUCCESS,
  payload,
  key,
});

export const mainApiError = (error) => ({
  type: actionTypes.API_FAILED,
  payload: error,
});

//= ====================================
//            API Key
//= ====================================
export const shortenUrl = (originalUrl, key) => ({
  type: actionTypes.SHORTEN_URL,
  payload: {
    originalUrl,
    key
  },
});

export const redirectUrl = (key, history) => ({
  type: actionTypes.REDIRECT_URL,
  payload: {
    key,
    history,
  },
});
