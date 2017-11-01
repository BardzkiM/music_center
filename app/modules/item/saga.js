import {put, takeLatest, call} from 'redux-saga/effects';
import * as axios from 'axios';
import {API, ITEM_CANNOT_BE_ADDED, ERROR} from '../../constants';
import {REQUEST_DATA_SUCCESS, REQUEST_DATA_FAILED} from '../form/actions';
import {REQUEST_ADD_ITEM, REQUEST_FETCH_ITEMS, SAVE_ITEMS} from './actions';
import {UNKNOWN_ERROR} from '../../locales';
import {SHOW_NOTIFICATION} from '../notification/actions';

export default function* watchItemRequests() {
  yield takeLatest(REQUEST_ADD_ITEM, addItem);
  yield takeLatest(REQUEST_FETCH_ITEMS, getActiveItems);
}

function* addItem({payload: itemData}) {
  try {
    const response = yield call(axios.post, API.item.add, itemData);
    const data = yield response.data;

    if (data) {
      yield put(REQUEST_DATA_SUCCESS(data));
    } else {
      yield put(REQUEST_DATA_FAILED(ITEM_CANNOT_BE_ADDED));
    }
  } catch (e) {
    yield put(REQUEST_DATA_FAILED(e));
  }
}

function* getActiveItems() {
  try {
    const response = yield call(axios.get, API.item.getAll);
    const data = yield response.data;

    if (data) {
      yield put(SAVE_ITEMS(data));
    } else {
      yield put(SHOW_NOTIFICATION({message: UNKNOWN_ERROR, type: ERROR}));
    }
  } catch (e) {
    yield put(SHOW_NOTIFICATION({message: UNKNOWN_ERROR, type: ERROR}));
  }
}