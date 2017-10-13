import {fromJS} from 'immutable';
import {USER_TYPE_LOGGED, USER_TYPE_UNLOGGED} from "../../constants";
import {HOME_PAGE, LOG_OUT, LOG_IN} from "../../locales";

const menu = fromJS({
  [USER_TYPE_LOGGED]: [
    {
      name: HOME_PAGE,
      path: '/'
    },
    {
      name: LOG_OUT,
      path: '/logout'
    }
  ],
  [USER_TYPE_UNLOGGED]: [
    {
      name: HOME_PAGE,
      path: '/'
    },
    {
      name: LOG_IN,
      path: '/login'
    }
  ]
});

export const DEFAULT_MENU = menu.get(USER_TYPE_UNLOGGED);

export default menu;