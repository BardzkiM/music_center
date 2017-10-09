import React from 'react';
import PropTypes from 'prop-types';
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {Provider} from 'react-redux';

import store from '../store/store';
import MainPage from './pages/main/index';

const history = syncHistoryWithStore(browserHistory, store);

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MainPage}>
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;