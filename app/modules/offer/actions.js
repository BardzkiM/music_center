import {createAction} from 'redux-actions';

export const REQUEST_ADD_OFFER = createAction('OFFER/REQUEST_ADD', data => data);
export const REQUEST_SEARCH_OFFERS = createAction('OFFER/REQUEST_SEARCH', data => data);
export const REQUEST_GET_OFFER = createAction('OFFER/REQUEST_GET', data => data);
export const REQUEST_USER_OFFERS = createAction('OFFER/REQUEST_FOR_USER', data => data);
export const SET_OFFER = createAction('OFFER/SET', data => data);
export const SET_OFFERS = createAction('OFFERS/SET', data => data);
