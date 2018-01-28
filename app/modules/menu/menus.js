import {fromJS} from 'immutable';
import {USER_TYPE_LOGGED, USER_TYPE_UNLOGGED} from '../../constants';
import {HOME_PAGE, REGISTER, ADD_ITEM, EDIT_USER_DATA, ADD_OFFER, SEARCH_OFFERS, MY_RENTALS} from '../../locales';

export const PATHS = {
  HOME_PAGE: {name: HOME_PAGE, path: '/'},
  REGISTER: {name: REGISTER, path: '/register'},
  ADD_ITEM: {name: ADD_ITEM, path: '/item/add'},
  EDIT_USER_DATA: {name: EDIT_USER_DATA, path: '/user/editData'},
  ADD_OFFER: {name: ADD_OFFER, path: '/offer/add'},
  SEARCH_OFFERS: {name: SEARCH_OFFERS, path: 'offer/search'},
  MY_RENTALS: {name: MY_RENTALS, path: 'user/myRentals'}
};

const menu = fromJS({
  [USER_TYPE_LOGGED]: [
    PATHS.HOME_PAGE,
    PATHS.EDIT_USER_DATA,
    PATHS.ADD_ITEM,
    PATHS.ADD_OFFER,
    PATHS.SEARCH_OFFERS,
    PATHS.MY_RENTALS
  ],
  [USER_TYPE_UNLOGGED]: [
    PATHS.HOME_PAGE,
    PATHS.REGISTER,
    PATHS.SEARCH_OFFERS
  ]
});

export const DEFAULT_MENU = menu.get(USER_TYPE_UNLOGGED);

export default menu;