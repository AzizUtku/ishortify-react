import { takeEvery, fork, put, all, call } from 'redux-saga/effects';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { LOGIN, REGISTER, VERIFY_EMAIL, CHECK_AUTO_SIGNIN, AUTH_LOGOUT, FORGOT_PASSWORD, FORGOT_PASSWORD_SUBMIT } from './actionTypes';
import { apiError, registrationSuccess, authSuccess, logout, sentRecoveryCode } from './actions';
import { hideLoading, showError, showLoading, showMessage } from '../layout/actions';
// import { apiAccountLogin, apiAccountRegister } from '../../api/auth';

function* loginUser({ payload }) {
  yield put(showLoading());
  try {
    const { username, password, history } = payload;
    const user = yield call(signIn, username, password);
    console.log(user);

    if (!user.attributes.email_verified) {
      history.push('verify/email/');
    } else {
      const userDetails = {
        username: user.username,
        email: user.attributes.email,
        idToken: user.signInUserSession.idToken.jwtToken,
      };
      localStorage.setItem('user', JSON.stringify(userDetails));
      yield put(authSuccess(userDetails));
      history.push('/business');
    }
  } catch (error) {
    yield put(showError(error.message));
  }
  yield put(hideLoading());
}

function* checkAutoSignin() {
  try {
    const user = localStorage.getItem('user');
    if (user && user !== 'undefined') {
      const userObj = JSON.parse(user);
      yield put(authSuccess(userObj));
    } else {
      yield put(logout());
    }
  } catch (error) {
    yield put(apiError(error.message));
  }
}

function* registerUser({ payload }) {
  yield put(showLoading());
  try {
    const { username, password, email, history } = payload;

    const apiPayload = {
      username,
      password,
      attributes: {
          email,
      }
    }

    yield call(signUp, apiPayload);
    yield put(registrationSuccess({
      username,
      email,
    }));
    history.push('/verify/email/');
  } catch (error) {
    yield put(showError(error.message));
  }
  yield put(hideLoading());
}

function* verifyEmail({ payload }) {
  yield put(showLoading());
  try {
    const { username, code, history } = payload;

    yield call(confirmSignUp, username, code);
    history.push('/signin/');
  } catch (error) {
    yield put(showError(error.message));
  }
  yield put(hideLoading());
}

function* sendRecoveryEmail({ payload }) {
  yield put(showLoading());
  try {
    const { username } = payload;

    yield call(forgotPassword, username);
    yield put(sentRecoveryCode());
    yield put(showMessage("We have sent a password reset code by email to you. Enter it below to reset your password."))
  } catch (error) {
    yield put(showError(error.message));
  }
  yield put(hideLoading());
}

function* recoverPassword({ payload }) {
  yield put(showLoading());
  try {
    const { username, code, newPassword, history } = payload;

    yield call(forgotPasswordSubmit, username, code, newPassword);
    yield put(showMessage("Your password has been changed."));
    history.push('/signin');
  } catch (error) {
    yield put(showError(error.message));
  }
  yield put(hideLoading());
}

function* logoutWorker({ payload }) {
  yield put(showLoading());
  try {
    localStorage.removeItem("user");
    yield call(logoutCognito);
  } catch (error) {
    yield put(showError(error.message));
  }
  yield put(hideLoading());
}

const signUp = async (payload) => {
  const { user } = await Auth.signUp(payload);
  return user;
}

const signIn = async (username, password) => {
  const user = await Auth.signIn(username, password);
  return user;
}

const currentAuthenticatedUser = async () => {
  const { attributes } = await Auth.currentAuthenticatedUser();
  return attributes;
}

const currentSession = async () => {
  const session = await Auth.currentSession();
  return session;
}

const confirmSignUp = async (username, code) => {
  await Auth.confirmSignUp(username, code);
}

const forgotPassword = async (username) => {
  await Auth.forgotPassword(username);
}

const forgotPasswordSubmit = async (username, code, newPassword) => {
  await Auth.forgotPasswordSubmit(username, code, newPassword);
}

const logoutCognito = async () => {
  await Auth.signOut();
}

export function* watchAuth() {
  yield takeEvery(LOGIN, loginUser);
  yield takeEvery(REGISTER, registerUser);
  yield takeEvery(VERIFY_EMAIL, verifyEmail);
  yield takeEvery(CHECK_AUTO_SIGNIN, checkAutoSignin);
  yield takeEvery(AUTH_LOGOUT, logoutWorker);
  yield takeEvery(FORGOT_PASSWORD, sendRecoveryEmail);
  yield takeEvery(FORGOT_PASSWORD_SUBMIT, recoverPassword);
}

function* authSaga() {
  yield all([fork(watchAuth)]);
}

export default authSaga;
