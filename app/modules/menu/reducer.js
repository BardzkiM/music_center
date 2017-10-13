import {handleActions} from 'redux-actions';

import {CHANGE_MENU} from "./actions";
import menus, {DEFAULT_MENU} from './menus';

export default handleActions({
  [CHANGE_MENU]: (state, {payload}) => menus.get(payload)
}, DEFAULT_MENU);