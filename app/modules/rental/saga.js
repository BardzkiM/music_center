import {put, takeLatest, call} from 'redux-saga/effects';
import * as axios from 'axios';
import {REQUEST_ADD_RENTAL} from './actions';
import {API, RENTAL_CANNOT_BE_ADDED} from '../../constants';
import {REQUEST_DATA_FAILED, REQUEST_DATA_SUCCESS} from '../form/actions';

export default function* watchRentalRequests() {
  yield takeLatest(REQUEST_ADD_RENTAL, handleAddRental);
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