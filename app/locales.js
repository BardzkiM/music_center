export const LOG_OUT = 'Log out';
export const LOG_IN = 'Log in';
export const HOME_PAGE = 'Home';
export const ADD_ITEM = 'Add Item';
export const LOADING = 'LOADING';
export const BACK_TO_HOME = 'Back to Home Page';
export const GO_TO_LOGIN_PAGE = 'Log in';
export const SHOW_ITEM = 'Show added item';
export const EDIT_USER_DATA = 'Edit profile';

//form controls
export const LOGIN = 'Login';
export const PASSWORD = 'Password';
export const REGISTER = 'Register';
export const FIRST_NAME = 'First Name';
export const LAST_NAME = 'Last Name';
export const ADDRESS = 'Address';
export const EMAIL = 'E-mail';
export const CITY = 'City';
export const STREET = 'Street';
export const HOUSE_NUMBER = 'House number';
export const APARTMENT_NUMBER = 'Apartment number';
export const ZIP_CODE = 'Zip-code';
export const ITEM_NAME = 'Name';
export const ITEM_TYPE = 'Type';
export const IMAGES = 'Images';
export const ROOM = 'Room';
export const PRICE = 'Price';
export const DELIVERY_PRICE = 'Delivery price';
export const DELIVERY_MAX_DISTANCE = 'Delivery max distance';
export const START_DATE = 'Start date';
export const END_DATE = 'End date';
export const DESCRIPTION = 'Description';
export const TITLE = 'Title';
export const ITEM = 'Item';
export const ADD_OFFER = 'Add offer';
export const CHANGE_DATA = 'Change Data';
export const SHOW_OFFER = 'Show added offer';
export const USE_USER_ADDRESS = 'Use my address';
export const NO_ITEMS_ADDED = 'No items added';
export const MAX_PRICE = 'Max price';
export const DATE = 'Date';
export const SEARCH = 'Search';

const ERRORS = {
  'WRONG_CREDENTIALS': 'Wrong Credentials',
  'ACCOUNT_ALREADY_EXISTS': 'Login is in use; choose other',
  'ITEM_CANNOT_BE_ADDED': 'Item cannot be added',
  'OFFER_CANNOT_BE_ADDED': 'Item is already rented on selected period',
  'NO_OFFERS_FOUND': 'No offers found with current criteria'
};

export const UNKNOWN_ERROR = 'Server Error';

export const getError = error => ERRORS[error] || UNKNOWN_ERROR;

export const MESSAGES = {
  LOGGED_IN: 'You have been successfully logged in!',
  REGISTERED: 'You have been successfully registered! \nNow you can login into page!',
  LOADING: 'Loading data from server',
  LOGGED_OUT: 'You have been logged out',
  ITEM_ADDED: 'Your item has been successfully added!',
  USER_DATA_CHANGED: 'Your data has been successfully updated!',
  START_DATE_BIGGER: 'Start date must be before end date!',
  OFFER_ADDED: 'Offer has been successfully added!'
};

export const GUITAR = 'Guitar';
export const DRUMS = 'Drums';
export const SOUND_SYSTEM = 'Sound system';
export const BASS_GUITAR = 'Bass guitar';
export const SAXOPHONE = 'Saxophone';
export const TROMBONE = 'Trombone';