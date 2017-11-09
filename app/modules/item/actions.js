import {createAction} from 'redux-actions';

export const REQUEST_ADD_ITEM = createAction('ITEM/REQUEST_ADD', data => data);

export const REQUEST_FETCH_ITEMS = createAction('ITEM/GET_ITEMS', () => null);
export const SAVE_ITEMS = createAction('ITEM/SAVE_ITEMS', data => data);

export const REQUEST_ITEM = createAction('ITEM/GET_ITEM', data => data);
export const SAVE_ITEM = createAction('ITEM/SAVE_ITEM', data => data);