import {handleActions} from 'redux-actions';
import {fromJS, List, Map} from 'immutable';
import {SAVE_ITEMS, SAVE_ITEM} from './actions';
import {ROUTER_LOCATION_CHANGE} from '../../constants';

const initialState = fromJS({items: null, item: null});

export default handleActions({
  [SAVE_ITEMS]: (state, {payload}) => state.set('items', List(payload)),
  [SAVE_ITEM]: (state, {payload}) => state.set('item', Map(payload)),
  [ROUTER_LOCATION_CHANGE]: () => initialState
}, initialState);