import {
  SHOW_LOADING,
  HIDE_LOADING,
  SHOW_MESSAGE,
  HIDE_MESSAGE,
  SHOW_ERROR,
  HIDE_ERROR,
} from './actionTypes';

export const showLoading = () => ({
  type: SHOW_LOADING,
});

export const hideLoading = () => ({
  type: HIDE_LOADING,
});

export const hideMessage = () => ({
  type: HIDE_MESSAGE,
});

export const showMessage = (message) => ({
  type: SHOW_MESSAGE,
  payload: {
    message,
  },
});

export const hideError = () => ({
  type: HIDE_ERROR,
});

export const showError = (error) => ({
  type: SHOW_ERROR,
  payload: {
    error,
  },
});
