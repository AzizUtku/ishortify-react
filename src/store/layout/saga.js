import { takeEvery, fork, put, all, delay } from 'redux-saga/effects';
import { SHOW_ERROR, SHOW_MESSAGE } from './actionTypes';
import * as actions from './actions';

function* errorWorker() {
  yield delay(5000);
  yield put(actions.hideError());
}

function* messageWorker() {
  yield delay(5000);
  yield put(actions.hideMessage());
}

export function* watchLayoutErrors() {
  yield takeEvery(SHOW_ERROR, errorWorker);
}

export function* watchLayoutMessages() {
  yield takeEvery(SHOW_MESSAGE, messageWorker);
}

function* layoutSaga() {
  yield all([fork(watchLayoutErrors), fork(watchLayoutMessages)]);
}

export default layoutSaga;
