import {createAction} from 'redux-actions';

export const REQUEST_ADD_RENTAL = createAction('RENTAL/REQUEST_ADD', data => data);
export const REQUEST_MY_RENTALS = createAction('RENTAL/REQUEST_MY_RENTALS', data => data);
export const REQUEST_GET_RENTALS_BY_OFFER_ID = createAction('OFFER/REQUEST_GET_RENTALS_BY_OFFER_ID', data => data);

export const SET_RENTALS = createAction('RENTALS/SET', data => data);