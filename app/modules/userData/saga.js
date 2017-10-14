import {put, takeLatest, call} from 'redux-saga/effects';
import * as axios from 'axios';

import {SEND_LOGIN_REQUEST, SAVE_USER_DATA, SEND_REGISTER_REQUEST} from './actions';
import {
  API, USER_TYPE_LOGGED, WRONG_CREDENTIALS, ACCOUNT_ALREADY_EXISTS
} from '../../constants';
import {REQUEST_DATA_SUCCESS, REQUEST_DATA_FAILED} from '../form/actions';
import {CHANGE_MENU} from '../menu/actions';

export default function* userDataSaga() {
  yield takeLatest(SEND_LOGIN_REQUEST, handleLoginRequest);
  yield takeLatest(SEND_REGISTER_REQUEST, handleRegisterRequest);
}

function* handleLoginRequest({payload: userData}) {
  try {
    const response = yield call(axios.post, API.login, userData);
    const data = yield response.data;

    if (data) {
      yield put(SAVE_USER_DATA(data));
      yield put(REQUEST_DATA_SUCCESS());
      yield put(CHANGE_MENU(USER_TYPE_LOGGED));
    } else {
      yield put(REQUEST_DATA_FAILED(WRONG_CREDENTIALS));
    }
  } catch (e) {
    yield put(REQUEST_DATA_FAILED(e));
  }
}

function* handleRegisterRequest({payload: userData}) {
  try {
    const response = yield call(axios.post, API.register, userData);
    const data = yield response.data;

    if (data) {
      yield put(REQUEST_DATA_SUCCESS());
    } else {
      yield put(REQUEST_DATA_FAILED(ACCOUNT_ALREADY_EXISTS));
    }
  } catch (e) {
    yield put(REQUEST_DATA_FAILED(e));
  }
}