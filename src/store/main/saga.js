import { takeEvery, fork, put, all, call, select, delay } from "redux-saga/effects";
import * as api from "../../api/main";
import { mainApiError, mainFetchApiSuccess, shortenUrl } from "./actions";
import * as layoutActions from "../layout/actions";
import * as actionTypes from "./actionTypes";

const getUser = (state) => state.auth.user;

//= ====================================
//            URL
//= ====================================
function* shortenUrlWorker({ payload }) {
  yield put(layoutActions.showLoading());
  try {
    payload.name = "";
    const response = yield call(api.apiShortenUrl, payload);
    const { data } = response;

    if (data.success) {
      yield put(mainFetchApiSuccess("originalUrl", payload.originalUrl));
      yield put(mainFetchApiSuccess("shortenedUrl", data.payload.shortenedUrl));
      yield put(layoutActions.showMessage(data.message));
    } else {
      yield put(layoutActions.showError(data.message));
    }
  } catch (error) {
    yield put(mainApiError(error.message));
    yield put(layoutActions.showError(error.message));
  }
  yield put(layoutActions.hideLoading());
}

function* redirectUrlWorker({ payload }) {
  yield put(layoutActions.showLoading());
  const { key, history } = payload;
  try {
    const response = yield call(api.apiFetchOriginalUrl, key);
    const { data } = response;
    if (data.success) {
      window.location.href = data.payload.originalUrl; 
    } else {
      history.push("/");
    }
  } catch (error) {
    history.push("/");
  }
  yield put(layoutActions.hideLoading());
}

export function* watchShortenURL() {
  yield takeEvery(actionTypes.SHORTEN_URL, shortenUrlWorker);
  yield takeEvery(actionTypes.REDIRECT_URL, redirectUrlWorker);
}

function* mainSaga() {
  yield all([fork(watchShortenURL)]);
}

export default mainSaga;
