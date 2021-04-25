import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import businessSaga from './business/saga';
import mainSaga from './main/saga';
import layoutSaga from './layout/saga';

export default function* rootSaga() {
  yield all([authSaga(), layoutSaga(), businessSaga(), mainSaga()]);
}
