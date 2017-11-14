import {createAction} from 'redux-actions';

export const SHOW_MODAL = createAction('MODAL/SHOW', data => data);
export const HIDE_MODAL = createAction('MODAL/HIDE', () => null);