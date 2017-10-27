import {fromJS} from 'immutable';
import {USER_TYPE_LOGGED, USER_TYPE_UNLOGGED} from '../../constants';
import {HOME_PAGE, LOG_IN, REGISTER, ADD_ITEM} from '../../locales';

export const PATHS = {
  HOME_PAGE: {name: HOME_PAGE, path: '/'},
  LOG_IN: {name: LOG_IN, path: '/login'},
  REGISTER: {name: REGISTER, path: '/register'},
  ADD_ITEM: {name: ADD_ITEM, path: '/item/add'}
};

const menu = fromJS({
  [USER_TYPE_LOGGED]: [
    PATHS.HOME_PAGE,
    PATHS.ADD_ITEM
  ],
  [USER_TYPE_UNLOGGED]: [
    PATHS.HOME_PAGE,
    PATHS.LOG_IN,
    PATHS.REGISTER
  ]
});

export const DEFAULT_MENU = menu.get(USER_TYPE_UNLOGGED);

export default menu;