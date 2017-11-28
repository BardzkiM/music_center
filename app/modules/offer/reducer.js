import {handleActions} from 'redux-actions';
import {fromJS} from 'immutable';
import {SET_OFFER, SET_OFFERS, SET_OFFER_RENTALS} from './actions';
import {ROUTER_LOCATION_CHANGE} from '../../constants';

const initialState = fromJS({offer: null, offers: null});

export default handleActions({
  [SET_OFFER]: (state, {payload}) => state.set('offer', payload),
  [SET_OFFERS]: (state, {payload}) => state.set('offers', payload),
  [ROUTER_LOCATION_CHANGE]: () => initialState
}, initialState);