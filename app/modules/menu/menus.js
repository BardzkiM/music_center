import {fromJS} from 'immutable';
import {USER_TYPE_LOGGED, USER_TYPE_UNLOGGED} from '../../constants';
import {HOME_PAGE, LOG_OUT, LOG_IN, REGISTER} from '../../locales';

const PATHS = {
  HOME_PAGE: {name: HOME_PAGE, path: '/'},
  LOG_IN: {name: LOG_IN, path: '/login'},
  REGISTER: {name: REGISTER, path: '/register'}
};

const menu = fromJS({
  [USER_TYPE_LOGGED]: [
    PATHS.HOME_PAGE
  ],
  [USER_TYPE_UNLOGGED]: [
    PATHS.HOME_PAGE,
    PATHS.LOG_IN,
    PATHS.REGISTER
  ]
});

export const DEFAULT_MENU = menu.get(USER_TYPE_UNLOGGED);

export default menu;