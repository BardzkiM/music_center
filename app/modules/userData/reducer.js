import {handleActions} from 'redux-actions';
import {Map} from 'immutable';

import {SAVE_USER_DATA, CLEAR_USER_DATA} from './actions';

export default handleActions({
  [SAVE_USER_DATA]: (state, {payload}) => Map(payload),
  [CLEAR_USER_DATA]: () => Map()
}, Map());