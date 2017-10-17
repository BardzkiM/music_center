import {WRONG_CREDENTIALS} from './constants';
export const LOG_OUT = 'Log out';
export const LOG_IN = 'Log in';
export const HOME_PAGE = 'Home';
export const LOADING = 'LOADING';
export const BACK_TO_HOME = 'Back to Home Page';
export const GO_TO_LOGIN_PAGE = 'Log in';


//form controls
export const LOGIN = 'Login';
export const PASSWORD = 'Password';
export const REGISTER = 'Register';
export const FIRST_NAME = 'First Name';
export const LAST_NAME = 'Last Name';
export const ADDRESS = 'Address';
export const EMAIL = 'E-mail';

const ERRORS = {
  [WRONG_CREDENTIALS]: 'Wrong Credentials'
};
const UNKNOWN_ERROR = 'Server Error';

export const getError = error => ERRORS[error] || UNKNOWN_ERROR;

export const MESSAGES = {
  LOGGED_IN: 'You have been successfully logged in!',
  REGISTERED: 'You have been successfully registered! \nNow you can login into page!',
  LOADING: 'Loading data from server',
  LOGGED_OUT: 'You have been logged out'
};