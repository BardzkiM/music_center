import {handleActions} from 'redux-actions';
import {Map} from 'immutable';
import {SHOW_NOTIFICATION, HIDE_NOTIFICATION} from './actions';

export default handleActions({
  [SHOW_NOTIFICATION]: (state, {payload: {message, type}}) =>
    state
      .set('show', true)
      .set('message', message)
      .set('type', type),
  [HIDE_NOTIFICATION]: state =>
    state
      .set('show', false)
      .set('message', '')
      .set('type', null)
}, Map({show: false, message: '', type: null}));
