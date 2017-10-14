import {createAction} from 'redux-actions';

export const REQUEST_DATA = createAction('FORM/REQUEST_DATA', () => null);
export const REQUEST_DATA_SUCCESS = createAction('FORM/REQUEST_DATA_SUCCESS', () => null);
export const REQUEST_DATA_FAILED = createAction('FORM/REQUEST_DATA_FAILED', e => e);
export const CLEAR_STATUS = createAction('FORM/CLEAR_STATUS', () => null);