import {handleActions} from 'redux-actions';
import {Map} from 'immutable';

import {SAVE_USER_DATA, CLEAR_USER_DATA, SAVE_CACHED_USER} from './actions';

const initialState = Map({loggedUser: null, user: null});

export default handleActions({
  [SAVE_USER_DATA]: (state, {payload}) => state.set('loggedUser', Map(payload)),
  [SAVE_CACHED_USER]: (state, {payload}) => state.set('user', Map(payload)),
  [CLEAR_USER_DATA]: () => initialState
}, initialState);