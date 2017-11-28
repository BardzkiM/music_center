import {put, takeLatest, call} from 'redux-saga/effects';
import * as axios from 'axios';
import {
  REQUEST_ADD_RENTAL,
  REQUEST_MY_RENTALS,
  SET_RENTALS,
  REQUEST_GET_RENTALS_BY_OFFER_ID,
  DEACTIVATE_RENTAL
} from './actions';
import {API, RENTAL_CANNOT_BE_ADDED, NO_RENTALS, RENTAL_CANNOT_BE_DEACTIVATED} from '../../constants';
import {REQUEST_DATA_FAILED, REQUEST_DATA_SUCCESS} from '../form/actions';

export default function* watchRentalRequests() {
  yield takeLatest(REQUEST_ADD_RENTAL, handleAddRental);
  yield takeLatest(REQUEST_MY_RENTALS, getMyRentals);
  yield takeLatest(REQUEST_GET_RENTALS_BY_OFFER_ID, getRentalsByOfferId);
  yield takeLatest(DEACTIVATE_RENTAL, deactivateRental);
}

const rentalAPI = API.rental;

function* handleAddRental({payload: rentalData}) {
  try {
    const response = yield call(axios.post, rentalAPI.add, rentalData);
    const data = yield response.data;

    if (data && ~data) {
      yield put(REQUEST_DATA_SUCCESS(data));
    } else {
      yield put(REQUEST_DATA_FAILED(RENTAL_CANNOT_BE_ADDED));
    }
  } catch (e) {
    yield put(REQUEST_DATA_FAILED(e));
  }
}

function* getMyRentals() {
  try {
    const response = yield call(axios.get, rentalAPI.getMyRentals);
    const data = yield response.data;

    if(data) {
      yield put(SET_RENTALS(data));
    } else {
      yield put(SET_RENTALS({error: NO_RENTALS}));
    }
  } catch(e) {
    yield put(SET_RENTALS({error: e}));
  }
}

function* deactivateRental({payload: rentalData}) {
  try {
    const response = yield call(axios.get, rentalAPI.deactivateRental + "/" + rentalData);
    const data = yield response.data;

    if (data && ~data) {
      yield put(REQUEST_MY_RENTALS());
    } else {
      yield put(SET_RENTALS(RENTAL_CANNOT_BE_DEACTIVATED));
    }
  } catch (e) {
    yield put(REQUEST_DATA_FAILED(e));
  }
}

function* getRentalsByOfferId({payload: offerId}) {
  try {
    const response = yield call(axios.get, rentalAPI.getRentalsByOfferId + '/' + offerId);
    const data = yield response.data;

    if(data) {
      yield put(SET_RENTALS(data));
    } else {
      yield put(SET_RENTALS({error: NO_RENTALS}));
    }
  } catch(e) {
    yield put(SET_RENTALS({error: e}));
  }
}