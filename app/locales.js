export const
  LOG_OUT = 'Log out',
  LOG_IN = 'Log in',
  HOME_PAGE = 'Home',
  ADD_ITEM = 'Add Item',
  LOADING = 'Loading...',
  BACK_TO_HOME = 'Back to Home Page',
  GO_TO_LOGIN_PAGE = 'Log in',
  SHOW_ITEM = 'Show added item',
  EDIT_USER_DATA = 'Edit profile';

//form controls
export const
  LOGIN = 'Login',
  PASSWORD = 'Password',
  REGISTER = 'Register',
  FIRST_NAME = 'First Name',
  LAST_NAME = 'Last Name',
  ADDRESS = 'Address',
  EMAIL = 'E-mail',
  CITY = 'City',
  STREET = 'Street',
  HOUSE_NUMBER = 'House number',
  APARTMENT_NUMBER = 'Apartment number',
  ZIP_CODE = 'Zip-code',
  ITEM_NAME = 'Name',
  ITEM_TYPE = 'Type',
  IMAGES = 'Images',
  ROOM = 'Room',
  PRICE = 'Price',
  DELIVERY_PRICE = 'Delivery price',
  DELIVERY_MAX_DISTANCE = 'Delivery max distance',
  DELIVERY_AREA = "Delivery distance",
  START_DATE = 'Start date',
  END_DATE = 'End date',
  DESCRIPTION = 'Description',
  TITLE = 'Title',
  ITEM = 'Item',
  ADD_OFFER = 'Add offer',
  CHANGE_DATA = 'Change Data',
  SHOW_OFFER = 'Show added offer',
  USE_USER_ADDRESS = 'Use my address',
  NO_ITEMS_ADDED = 'No items added',
  MAX_PRICE = 'Max price',
  DATE = 'Date',
  SEARCH = 'Search',
  ACTIVE = 'Active',
  YES = 'Yes',
  NO = 'No',
  PER_HOUR = "per hour",
  AVAILABLE = "Available";

const ERRORS = {
  'WRONG_CREDENTIALS': 'Wrong Credentials',
  'ACCOUNT_ALREADY_EXISTS': 'Login is in use; choose other',
  'ITEM_CANNOT_BE_ADDED': 'Item cannot be added',
  'OFFER_CANNOT_BE_ADDED': 'Item is already rented on selected period',
  'NO_OFFERS_FOUND': 'No offers found with current criteria',
  'ITEM_NOT_FOUND': 'Item with specified id not found!'
};

export const UNKNOWN_ERROR = 'Server Error';

export const getErrorMessage = error => ERRORS[error] || UNKNOWN_ERROR;

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

export const
  GUITAR = 'Guitar',
  DRUMS = 'Drums',
  SOUND_SYSTEM = 'Sound system',
  BASS_GUITAR = 'Bass guitar',
  SAXOPHONE = 'Saxophone',
  TROMBONE = 'Trombone';
