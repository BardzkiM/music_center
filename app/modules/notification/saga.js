import {delay} from 'redux-saga';
import {put, takeLatest} from 'redux-saga/effects';
import {HIDE_NOTIFICATION, SHOW_NOTIFICATION} from './actions';
import {NOTIFICATION_HIDE_TIME} from '../../constants';

export default function* watchNotificationShow() {
  yield takeLatest(SHOW_NOTIFICATION, hideNotification);
}

function* hideNotification() {
  yield delay(NOTIFICATION_HIDE_TIME);
  yield put(HIDE_NOTIFICATION());
}