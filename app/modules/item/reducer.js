import {handleActions} from 'redux-actions';
import {fromJS} from 'immutable';
import {SAVE_ITEMS} from './actions';
import {ROUTER_LOCATION_CHANGE} from '../../constants';

const initialState = fromJS({items: [], item: {}});

export default handleActions({
  [SAVE_ITEMS]: (state, {payload}) => state.set('items', Map(payload)),
  [ROUTER_LOCATION_CHANGE]: () => initialState
}, initialState);