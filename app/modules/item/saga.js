import {put, takeLatest, call} from 'redux-saga/effects';
import * as axios from 'axios';
import {API, ITEM_CANNOT_BE_ADDED} from '../../constants';
import {REQUEST_DATA_SUCCESS, REQUEST_DATA_FAILED} from '../form/actions';
import {REQUEST_ADD_ITEM} from './actions';

export default function* watchItemRequests() {
  yield takeLatest(REQUEST_ADD_ITEM, addItem);
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
  } catch(e) {
    yield put(REQUEST_DATA_FAILED(e));
  }
}