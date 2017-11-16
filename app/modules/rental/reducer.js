import {handleActions} from 'redux-actions';
import {Map} from 'immutable';
import {SET_RENTALS} from './actions';
import {ROUTER_LOCATION_CHANGE} from '../../constants';

const initialState = Map({rental: null, rentals: null});

export default handleActions({
  [SET_RENTALS]: (state, {payload}) => state.set('rentals', payload),
  [ROUTER_LOCATION_CHANGE]: () => initialState
}, initialState);