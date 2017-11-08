import {put, takeLatest, call} from 'redux-saga/effects';
import * as axios from 'axios';
import {API, OFFER_CANNOT_BE_ADDED, NO_OFFERS_FOUND} from '../../constants';
import {REQUEST_DATA_SUCCESS, REQUEST_DATA_FAILED} from '../form/actions';
import {REQUEST_ADD_OFFER, REQUEST_SEARCH_OFFERS, REQUEST_GET_OFFER, SET_OFFER} from './actions';

export default function* watchItemRequests() {
  yield takeLatest(REQUEST_ADD_OFFER, addOffer);
  yield takeLatest(REQUEST_SEARCH_OFFERS, searchOffers);
  yield takeLatest (REQUEST_GET_OFFER, getOffer);
}

function* addOffer({payload: offerData}) {
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

function* getOffer({payload: offerData}) {
  try {
    const response = yield call(axios.get, API.offer.getById + '/' + offerData);
    const data = yield response.data;

    if (data) {
      yield put(SET_OFFER(data));
    } else {
      yield put(SET_OFFER({error: 'CANNOT_FIND_OFFER'}));
    }
  } catch (e) {
   //TODO: yield put(REQUEST_DATA_FAILED(e));
  }

}