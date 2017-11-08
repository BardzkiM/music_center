import {handleActions} from 'redux-actions';

import {fromJS} from 'immutable';
import {SET_OFFER} from './actions';
import {ROUTER_LOCATION_CHANGE} from "../../constants";

const initialState = fromJS({offer: null});

export default handleActions({
  [SET_OFFER]: (state, {payload}) => state.set('offer', payload),
  [ROUTER_LOCATION_CHANGE]: () => initialState
}, initialState);