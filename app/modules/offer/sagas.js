import {put, takeLatest, call} from 'redux-saga/effects';
import * as axios from 'axios';
import {API, OFFER_CANNOT_BE_ADDED, NO_OFFERS_FOUND, OFFER_NOT_FOUND} from '../../constants';
import {REQUEST_DATA_SUCCESS, REQUEST_DATA_FAILED} from '../form/actions';
import {
  REQUEST_ADD_OFFER,
  REQUEST_SEARCH_OFFERS,
  REQUEST_GET_OFFER,
  SET_OFFER,
  REQUEST_USER_OFFERS,
  SET_OFFERS
} from './actions';

export default function* watchItemRequests() {
  yield takeLatest(REQUEST_ADD_OFFER, addOffer);
  yield takeLatest(REQUEST_SEARCH_OFFERS, searchOffers);
  yield takeLatest(REQUEST_GET_OFFER, getOffer);
  yield takeLatest(REQUEST_USER_OFFERS, getUserOffers);
}

const offerAPI = API.offer;

function* addOffer({payload: offerData}) {
  try {
    const response = yield call(axios.post, offerAPI.add, offerData);
    const data = yield response.data;

    if (data && ~data) {
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
    const response = yield call(axios.post, offerAPI.search, searchData);
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
    const response = yield call(axios.get, offerAPI.getById + '/' + offerData);
    const data = yield response.data;

    if (data) {
      yield put(SET_OFFER(data));
    } else {
      yield put(SET_OFFER({error: OFFER_NOT_FOUND}));
    }
  } catch (e) {
    yield put(SET_OFFER({error: e}));
  }
}

function* getUserOffers({payload: userId}) {
  try {
    const response = yield call(axios.get, offerAPI.getByUserId + '/' + userId);
    const data = yield response.data;

    if (data) {
      yield put(SET_OFFERS(data));
    } else {
      yield put(SET_OFFERS({error: NO_OFFERS_FOUND}));
    }
  } catch (e) {
    yield put(SET_OFFERS({error: e}));
  }
}