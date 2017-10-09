import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from '../modules/reducers';
import sagas from '../modules/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({routing: routerReducer}),
  {},
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(sagas);

export default store;