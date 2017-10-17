import {handleActions} from 'redux-actions';
import {Map} from 'immutable';
import {SET_APP_STATE_READY} from './actions';

export default handleActions({
  [SET_APP_STATE_READY]: state => state.set('isReady', true)
}, Map({isReady: false}));