import {put, takeLatest, call} from 'redux-saga/effects';
import * as axios from 'axios';

import {REQUEST_LOGIN, SAVE_USER_DATA, REQUEST_REGISTER, CHECK_LOGIN, LOGOUT, CLEAR_USER_DATA} from './actions';
import {
  API, USER_TYPE_LOGGED, WRONG_CREDENTIALS, ACCOUNT_ALREADY_EXISTS, USER_TYPE_UNLOGGED, INFO
} from '../../constants';
import {REQUEST_DATA_SUCCESS, REQUEST_DATA_FAILED} from '../form/actions';
import {CHANGE_MENU} from '../menu/actions';
import {SET_APP_STATE_READY} from '../boot/actions';
import {SHOW_NOTIFICATION} from '../notification/actions';
import {MESSAGES} from '../../locales';

export default function* userDataSaga() {
  yield takeLatest(REQUEST_LOGIN, handleLoginRequest);
  yield takeLatest(REQUEST_REGISTER, handleRegisterRequest);
  yield takeLatest(CHECK_LOGIN, handleLoginCheck);
  yield takeLatest(LOGOUT, handleLogoutRequest);
}

function* handleLoginRequest({payload: userData}) {
  try {
    const response = yield call(axios.post, API.login, userData);
    const data = yield response.data;

    if (data) {
      yield dispatchLoginActions(data);
      yield put(REQUEST_DATA_SUCCESS());
    } else {
      yield put(REQUEST_DATA_FAILED(WRONG_CREDENTIALS));
    }
  } catch (e) {
    yield put(REQUEST_DATA_FAILED(e));
  }
}

function* handleLogoutRequest() {
  try {
    yield call(axios.post, API.logout);

    yield dispatchLogoutActions();
  } catch (e) {
    console.log(e);
  }
}

function* handleRegisterRequest({payload: userData}) {
  try {
    const response = yield call(axios.post, API.register, userData);
    const data = yield response;

    if (data) {
      yield put(REQUEST_DATA_SUCCESS());
    } else {
      yield put(REQUEST_DATA_FAILED(ACCOUNT_ALREADY_EXISTS));
    }
  } catch (e) {
    yield put(REQUEST_DATA_FAILED(e));
  }
}

function* handleLoginCheck() {
  try {
    const response = yield call(axios.get, API.getLoggedUser);
    const data = yield response.data;

    if (data) {
      yield dispatchLoginActions(data);
    }

    yield put(SET_APP_STATE_READY());
  } catch (e) {
    console.log(e)
  }
}

function* dispatchLogoutActions() {
  yield put(CLEAR_USER_DATA());
  yield put(CHANGE_MENU(USER_TYPE_UNLOGGED));
  yield put(SHOW_NOTIFICATION({message: MESSAGES.LOGGED_OUT, type: INFO}));
}

function* dispatchLoginActions(data) {
  yield put(SAVE_USER_DATA(data));
  yield put(CHANGE_MENU(USER_TYPE_LOGGED));
}
