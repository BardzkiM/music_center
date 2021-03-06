import {createAction} from 'redux-actions';

export const REQUEST_LOGIN = createAction('USER/LOGIN', data => data);
export const REQUEST_REGISTER = createAction('USER/REGISTER', data => data);
export const REQUEST_USER_DATA_CHANGE = createAction('USER/CHANGE_DATA', data => data);
export const CHECK_LOGIN = createAction('USER/CHECK_IF_LOGGED', () => null);
export const LOGOUT = createAction('USER/LOGOUT');
export const SAVE_USER_DATA = createAction('USER/SAVE_DATA', data => data);
export const CLEAR_USER_DATA = createAction('USER/CLEAR_DATA', () => null);

export const REQUEST_USER = createAction('USER/REQUEST_USER', data => data);
export const SAVE_CACHED_USER = createAction('USER/SAVE_CACHED_USER', data => data);