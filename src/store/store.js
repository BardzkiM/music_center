import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../modules/reducers';
import sagas from '../modules/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(reducers),
  {},
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(sagas);

export default store;