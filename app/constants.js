import {ROOM, GUITAR, DRUMS, SOUND_SYSTEM, BASS_GUITAR, SAXOPHONE, TROMBONE} from './locales';

export const
  USER_TYPE_LOGGED = 'USER_TYPE_LOGGED',
  USER_TYPE_UNLOGGED = 'USER_TYPE_UNLOGGED',
  WRONG_CREDENTIALS = 'WRONG_CREDENTIALS',
  ACCOUNT_ALREADY_EXISTS = 'ACCOUNT_ALREADY_EXISTS',
  ITEM_CANNOT_BE_ADDED = 'ITEM_CANNOT_BE_ADDED',
  OFFER_CANNOT_BE_ADDED = 'OFFER_CANNOT_BE_ADDED',
  NO_OFFERS_FOUND = 'NO_OFFERS_FOUND',
  ITEM_NOT_FOUND = 'ITEM_NOT_FOUND',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  OFFER_NOT_FOUND = 'OFFER_NOT_FOUND',
  RENTAL_CANNOT_BE_ADDED = 'RENTAL_CANNOT_BE_ADDED',
  RENTAL_CANNOT_BE_DEACTIVATED = 'RENTAL_CANNOT_BE_DEACTIVATED',
  NO_RENTALS = 'NO_RENTALS';

export const ROUTER_LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

export const NOTIFICATION_HIDE_TIME = 5000;

export const API = {
  item: {
    add: '/item/add',
    all: '/item/all',
    getById: '/item'
  },
  offer: {
    add: '/offer/add',
    search: '/offer/search',
    getById: '/offer',
    getByUserId: '/offer/getOffersByUserId',
    getActiveByUserId: '/offer/getActiveOffersByUserId'
  },
  rental: {
    add: '/rental/add',
    getMyRentals: '/rental/getAllUserRentals',
    deactivateRental: '/rental/deactivateRentalById',
    getRentalsByOfferId: '/rental/getAllRentalsByOfferId'
  },
  user: {
    login: '/user/login',
    logout: '/user/logout',
    register: '/user/register',
    logged: '/user/logged',
    update: '/user/update',
    getUserById: '/user/'
  }
};

export const
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  INFO = 'INFO',
  LOADING = 'LOADING',
  NONE = '';

export const ITEM_TYPES = [
  {value: 'ROOM', name: ROOM},
  {value: 'GUITAR', name: GUITAR},
  {value: 'DRUMS', name: DRUMS},
  {value: 'TROMBONE', name: TROMBONE},
  {value: 'SOUND_SYSTEM', name: SOUND_SYSTEM},
  {value: 'BASS_GUITAR', name: BASS_GUITAR},
  {value: 'SAXOPHONE', name: SAXOPHONE},
];

export const getItemTypeName = value => ITEM_TYPES.find(item => item.value === value).name;