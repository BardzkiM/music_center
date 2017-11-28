import {fromJS} from 'immutable';
import {USER_TYPE_LOGGED, USER_TYPE_UNLOGGED} from '../../constants';
import {HOME_PAGE, REGISTER, ADD_ITEM, EDIT_USER_DATA, ADD_OFFER} from '../../locales';

export const PATHS = {
  HOME_PAGE: {name: HOME_PAGE, path: '/'},
  REGISTER: {name: REGISTER, path: '/register'},
  ADD_ITEM: {name: ADD_ITEM, path: '/item/add'},
  EDIT_USER_DATA: {name: EDIT_USER_DATA, path: '/user/editData'},
  ADD_OFFER: {name: ADD_OFFER, path: '/offer/add'}
};

const menu = fromJS({
  [USER_TYPE_LOGGED]: [
    PATHS.HOME_PAGE,
    PATHS.ADD_ITEM,
    PATHS.EDIT_USER_DATA,
    PATHS.ADD_OFFER
  ],
  [USER_TYPE_UNLOGGED]: [
    PATHS.HOME_PAGE,
    PATHS.REGISTER
  ]
});

export const DEFAULT_MENU = menu.get(USER_TYPE_UNLOGGED);

export default menu;