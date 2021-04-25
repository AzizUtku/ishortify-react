import { takeEvery, fork, put, all, call, select } from 'redux-saga/effects';
import * as api from '../../api/business';
import { businessApiError, businessFetchApiSuccess } from './actions';
import * as layoutActions from '../layout/actions';
import * as actionTypes from './actionTypes';

const getUser = (state) => state.auth.user;

//= ====================================
//            API Key
//= ====================================
function* fetchApiKeyWorker() {
  yield put(layoutActions.showLoading());
  const user = yield select(getUser);
  try {
    const response = yield call(api.apiGetApiKey, user);
    const { data } = response;

    if (data.success) {
      yield put(businessFetchApiSuccess('apiKey', data.payload.apiKey));
    } else {
      yield put(layoutActions.showError(data.message));
    }
  } catch (error) {
    yield put(businessApiError(error.message));
    yield put(layoutActions.showError(error.message));
  }
  yield put(layoutActions.hideLoading());
}

function* createApiKeyWorker() {
  yield put(layoutActions.showLoading());
  const user = yield select(getUser);
  try {
    const response = yield call(api.apiCreateApiKey, user);
    const { data } = response;

    if (data.success) {
      yield put(businessFetchApiSuccess('apiKey', data.payload.apiKey));
      yield put(layoutActions.showMessage(data.message));
    } else {
      yield put(layoutActions.showError(data.message));
    }
  } catch (error) {
    yield put(businessApiError(error.message));
    yield put(layoutActions.showError(error.message));
  }
  yield put(layoutActions.hideLoading());
}

function* deleteApiKeyWorker() {
  yield put(layoutActions.showLoading());
  const user = yield select(getUser);
  try {
    const response = yield call(api.apiDeleteApiKey, user);
    const { data } = response;

    if (data.success) {
      yield put(businessFetchApiSuccess('apiKey', ''));
      yield put(layoutActions.showMessage(data.message));
    } else {
      yield put(layoutActions.showError(data.message));
    }
  } catch (error) {
    yield put(businessApiError(error.message));
    yield put(layoutActions.showError(error.message));
  }
  yield put(layoutActions.hideLoading());
}

function* fetchAnalyticsWorker() {
  yield put(layoutActions.showLoading());
  const user = yield select(getUser);
  try {
    const response = yield call(api.apiFetchAnalytics, user);
    const { data } = response;

    if (data.success) {
      yield put(businessFetchApiSuccess('links', data.payload.links));
    } else {
      yield put(layoutActions.showError(data.message));
    }
  } catch (error) {
    yield put(businessApiError(error.message));
    yield put(layoutActions.showError(error.message));
  }
  yield put(layoutActions.hideLoading());
}

export function* watchApiKey() {
  yield takeEvery(actionTypes.FETCH_API_KEY, fetchApiKeyWorker);
  yield takeEvery(actionTypes.CREATE_API_KEY, createApiKeyWorker);
  yield takeEvery(actionTypes.DELETE_API_KEY, deleteApiKeyWorker);
  yield takeEvery(actionTypes.FETCH_ANALYTICS, fetchAnalyticsWorker);
}

function* businessSaga() {
  yield all([
    fork(watchApiKey),
  ]);
}

export default businessSaga;
