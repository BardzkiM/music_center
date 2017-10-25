export const USER_TYPE_LOGGED = 'USER_TYPE_LOGGED';
export const USER_TYPE_UNLOGGED = 'USER_TYPE_UNLOGGED';
export const WRONG_CREDENTIALS = 'WRONG_CREDENTIALS';
export const ACCOUNT_ALREADY_EXISTS = 'ACCOUNT_ALREADY_EXISTS';
export const ITEM_CANNOT_BE_ADDED = 'ITEM_CANNOT_BE_ADDED';

export const ROUTER_LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

export const NOTIFICATION_HIDE_TIME = 5000;

export const API = {
  login: '/login',
  register: '/register',
  getLoggedUser: '/getLoggedUser',
  logout: '/logout',
  item: {
    add: '/item/add'
  }
};

export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const WARNING = 'WARNING';
export const INFO = 'INFO';
export const LOADING = 'LOADING';
export const NONE = '';