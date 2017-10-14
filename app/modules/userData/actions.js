import {createAction} from 'redux-actions';

export const SEND_LOGIN_REQUEST = createAction('LOGIN/SEND_LOGIN_REQUEST', data => data);
export const SEND_REGISTER_REQUEST = createAction('REGISTER/SEND_REGISTER_REQUEST', data => data);
export const SAVE_USER_DATA = createAction('LOGIN/SAVE_USER_DATA', data => data);
export const CLEAR_USER_DATA = createAction('LOGIN/CLEAR_USER_DATA', () => null);