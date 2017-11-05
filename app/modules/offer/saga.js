import {put, takeLatest, call} from 'redux-saga/effects';
import * as axios from 'axios';
import {API, OFFER_CANNOT_BE_ADDED, NO_OFFERS_FOUND} from '../../constants';
import {REQUEST_DATA_SUCCESS, REQUEST_DATA_FAILED} from '../form/actions';
import {REQUEST_ADD_OFFER, REQUEST_SEARCH_OFFERS} from './actions';

export default function* watchItemRequests() {
  yield takeLatest(REQUEST_ADD_OFFER, addItem);
  yield takeLatest(REQUEST_SEARCH_OFFERS, searchOffers);
}

function* addItem({payload: offerData}) {
  try {
    const response = yield call(axios.post, API.offer.add, offerData);
    const data = yield response.data;

    if (data) {
      yield put(REQUEST_DATA_SUCCESS(data));
    } else {
      yield put(REQUEST_DATA_FAILED(OFFER_CANNOT_BE_ADDED));
    }
  } catch (e) {
    yield put(REQUEST_DATA_FAILED(e));
  }
}

function* searchOffers({payload: searchData}) {
  try {
    const response = yield call(axios.post, API.offer.search, searchData);
    const data = yield response.data;

    if (data && data.length) {
      yield put(REQUEST_DATA_SUCCESS(data));
    } else {
      yield put(REQUEST_DATA_FAILED(NO_OFFERS_FOUND));
    }
  } catch (e) {
    yield put(REQUEST_DATA_FAILED(e));
  }
}