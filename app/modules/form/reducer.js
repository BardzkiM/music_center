import {handleActions} from 'redux-actions';
import {Map} from 'immutable';
import {REQUEST_DATA, REQUEST_DATA_FAILED, REQUEST_DATA_SUCCESS, CLEAR_STATUS} from './actions';
import {ROUTER_LOCATION_CHANGE} from '../../constants';
import {LOADING, ERROR, SUCCESS, NONE} from './../../constants';

const initialState = Map({status: NONE, error: '', data: null});

export default handleActions({
  [REQUEST_DATA]: state =>
    state
      .set('status', LOADING)
      .set('data', null),
  [REQUEST_DATA_FAILED]: (state, {payload: message}) =>
    state
      .set('status', ERROR)
      .set('error', message)
      .set('data', null),
  [REQUEST_DATA_SUCCESS]: (state, {payload: data}) =>
    state
      .set('status', SUCCESS)
      .set('data', data),
  [CLEAR_STATUS]: () => initialState,
  [ROUTER_LOCATION_CHANGE]: () => initialState
}, initialState);