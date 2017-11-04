import {ROOM, GUITAR, DRUMS, SOUND_SYSTEM, BASS_GUITAR, SAXOPHONE, TROMBONE} from './locales';
export const USER_TYPE_LOGGED = 'USER_TYPE_LOGGED';
export const USER_TYPE_UNLOGGED = 'USER_TYPE_UNLOGGED';
export const WRONG_CREDENTIALS = 'WRONG_CREDENTIALS';
export const ACCOUNT_ALREADY_EXISTS = 'ACCOUNT_ALREADY_EXISTS';
export const ITEM_CANNOT_BE_ADDED = 'ITEM_CANNOT_BE_ADDED';
export const OFFER_CANNOT_BE_ADDED = 'Item is already rented on selected period';

export const ROUTER_LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

export const NOTIFICATION_HIDE_TIME = 5000;

export const API = {
  item: {
    add: '/item/add',
    getAll: '/item/getAll'
  },
  offer: {
    add: '/offer/add'
  },
  user: {
    login: '/login',
    logout: '/logout',
    register: '/register',
    getLogged: '/getLoggedUser',
    update: '/updateUser'
    // login: '/user/login',
    // logout: '/user/logout',
    // register: '/user/register',
    // getLogged: '/user/getLogged',
    // update: '/user/update'
  }
};

export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const WARNING = 'WARNING';
export const INFO = 'INFO';
export const LOADING = 'LOADING';
export const NONE = '';

export const ITEM_TYPES = [
  {value: 'ROOM', name: ROOM},
  {value: 'GUITAR', name: GUITAR},
  {value: 'DRUMS', name: DRUMS},
  {value: 'TROMBONE', name: TROMBONE},
  {value: 'SOUND_SYSTEM', name: SOUND_SYSTEM},
  {value: 'BASS_GUITAR', name: BASS_GUITAR},
  {value: 'SAXOPHONE', name: SAXOPHONE},
];

export const TIME = {HOUR: 1000 * 3600};