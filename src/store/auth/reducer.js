/* eslint-disable arrow-body-style */
import * as actionTypes from './actionTypes';
import updateObject from '../utility';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: null,
  userDetails: null,
  verification: {
    email: null,
    username: null,
  },
  sentRecoveryCode: false,
};

const logout = (state) => {
  return updateObject(state, {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
    sentRecoveryCode: false,
  });
};

const checkLogin = (state) => {
  return updateObject(state, {
    user: null,
    loading: true,
    error: null,
    sentRecoveryCode: false,
  });
};

export const updateUserDetails = (state, action) => {
  return updateObject(state, {
    userDetails: action.payload,
    sentRecoveryCode: false,
  });
};

const userRegister = (state) => {
  return updateObject(state, {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
    sentRecoveryCode: false,
  });
};

const userRegistationSuccess = (state, action) => {
  return updateObject(state, {
    verification: {
      username: action.payload.username,
      email: action.payload.email,
      sentRecoveryCode: false,
    }
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    user: action.payload,
    loading: false,
    error: null,
    isAuthenticated: true,
    sentRecoveryCode: false,
  });
};

const apiFailed = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.payload,
    isAuthenticated: false,
  });
};

const checkAutoSignIn = (state) => {
  return updateObject(state, {
    user: null,
    loading: true,
    error: null,
    sentRecoveryCode: false,
  });
};

const sentRecoveryCode = (state) => {
  return updateObject(state, {
    sentRecoveryCode: true,
  });
};

const forgotPassword = (state) => {
  return updateObject(state, {
    sentRecoveryCode: false,
  });
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECK_AUTO_SIGNIN:
      return checkAutoSignIn(state);
    case actionTypes.UPDATE_USER_DETAILS:
      return updateUserDetails(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.API_FAILED:
      return apiFailed(state, action);
    case actionTypes.LOGIN:
      return checkLogin(state);
    case actionTypes.AUTH_LOGOUT:
      return logout(state);
    case actionTypes.REGISTRATION_SUCCESS:
      return userRegistationSuccess(state, action);
    case actionTypes.REGISTER:
      return userRegister(state);
    case actionTypes.SENT_RECOVERY:
      return sentRecoveryCode(state);
    case actionTypes.FORGOT_PASSWORD:
      return forgotPassword(state);
    default:
      return state;
  }
};

export default auth;
