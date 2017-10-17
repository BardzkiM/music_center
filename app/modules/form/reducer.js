import {handleActions} from 'redux-actions';
import {Map} from 'immutable';

import {REQUEST_DATA, REQUEST_DATA_FAILED, REQUEST_DATA_SUCCESS, CLEAR_STATUS} from './actions';
import {ROUTER_LOCATION_CHANGE} from '../../constants';
import {LOADING, ERROR, SUCCESS, NONE} from './../../constants';

export default handleActions({
  [REQUEST_DATA]: state => state.set('status', LOADING),
  [REQUEST_DATA_FAILED]: (state, {payload: message}) =>
    state
      .set('status', ERROR)
      .set('error', message),
  [REQUEST_DATA_SUCCESS]: state => state.set('status', SUCCESS),
  [CLEAR_STATUS]: state => clearStatus(state),
  [ROUTER_LOCATION_CHANGE]: state => clearStatus(state)
}, Map({status: NONE, error: ''}));

const clearStatus = state => state.set('status', NONE).set('error', '');