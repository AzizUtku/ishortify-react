import * as actionTypes from "./actionTypes";

export const forgotPassword = (username) => ({
  type: actionTypes.FORGOT_PASSWORD,
  payload: { username },
});

export const forgotPasswordSubmit = (username, code, newPassword, history) => ({
  type: actionTypes.FORGOT_PASSWORD_SUBMIT,
  payload: { username, code, newPassword, history },
});

export const sentRecoveryCode = () => ({
  type: actionTypes.SENT_RECOVERY,
});

export const logout = (history) => ({
  type: actionTypes.AUTH_LOGOUT,
  payload: { history },
});

export const checkAutoSignIn = () => ({
  type: actionTypes.CHECK_AUTO_SIGNIN,
});

export const login = (username, password, history) => ({
  type: actionTypes.LOGIN,
  payload: { username, password, history },
});

export const register = (username, email, password, history) => ({
  type: actionTypes.REGISTER,
  payload: { username, email, password, history },
});

export const verifyEmail = (username, code, history) => ({
  type: actionTypes.VERIFY_EMAIL,
  payload: { username, code, history },
});

export const registrationSuccess = (data) => ({
  type: actionTypes.REGISTRATION_SUCCESS,
  payload: data,
});

export const authSuccess = (user) => ({
  type: actionTypes.AUTH_SUCCESS,
  payload: user,
});

export const updateUserDetails = (userDetails) => ({
  type: actionTypes.UPDATE_USER_DETAILS,
  payload: userDetails,
});

export const apiError = (error) => ({
  type: actionTypes.API_FAILED,
  payload: error,
});
