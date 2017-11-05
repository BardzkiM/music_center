import {createAction} from 'redux-actions';

export const REQUEST_ADD_OFFER = createAction('OFFER/REQUEST_ADD', data => data);
export const REQUEST_SEARCH_OFFERS = createAction('OFFER/REQUEST_SEARCH', data => data);