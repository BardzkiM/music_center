import {createAction} from 'redux-actions';

export const SHOW_NOTIFICATION = createAction('NOTIFICATION/SHOW', data => data);
export const HIDE_NOTIFICATION = createAction('NOTIFICATION/HIDE', () => null);