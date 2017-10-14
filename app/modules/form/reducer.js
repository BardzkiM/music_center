import {handleActions} from 'redux-actions';
import {Map} from 'immutable';

import {REQUEST_DATA, REQUEST_DATA_FAILED, REQUEST_DATA_SUCCESS, CLEAR_STATUS} from './actions';
import {ROUTER_LOCATION_CHANGE} from '../../constants';

export default handleActions({
  [REQUEST_DATA]: state => state.set('status', REQUEST_DATA),
  [REQUEST_DATA_FAILED]: state => state.set('status', REQUEST_DATA_FAILED),
  [REQUEST_DATA_SUCCESS]: state => state.set('status', REQUEST_DATA_SUCCESS),
  [CLEAR_STATUS]: state => state.set('status', ''),
  [ROUTER_LOCATION_CHANGE]: state => state.set('status', '')
}, Map({status: ''}));