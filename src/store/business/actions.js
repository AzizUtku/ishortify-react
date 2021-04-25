import * as actionTypes from './actionTypes';

export const businessFetchApiSuccess = (key, payload) => ({
  type: actionTypes.FETCH_API_SUCCESS,
  payload,
  key,
});

export const businessApiError = (error) => ({
  type: actionTypes.API_FAILED,
  payload: error,
});

//= ====================================
//            API Key
//= ====================================
export const fetchApiKey = () => ({
  type: actionTypes.FETCH_API_KEY,
});

export const createApiKey = () => ({
  type: actionTypes.CREATE_API_KEY,
});

export const deleteApiKey = () => ({
  type: actionTypes.DELETE_API_KEY,
});

export const fetchAnalytics = () => ({
  type: actionTypes.FETCH_ANALYTICS,
});
