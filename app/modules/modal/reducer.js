import {handleActions} from 'redux-actions';
import {Map} from 'immutable';
import {SHOW_MODAL, HIDE_MODAL} from './actions';
import {ROUTER_LOCATION_CHANGE} from '../../constants';

const initialState = Map({show: false, component: null});

export default handleActions({
  [SHOW_MODAL]: (state, {payload: component}) =>
    state
      .set('show', true)
      .set('component', component),
  [HIDE_MODAL]: () => initialState,
  [ROUTER_LOCATION_CHANGE]: () => initialState
}, initialState);