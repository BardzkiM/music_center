import React from 'react';
import PropTypes from 'prop-types';
import {Router, hashHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {Provider} from 'react-redux';

import store from '../store/store';
import Routes from './routes/Routes';

const history = syncHistoryWithStore(hashHistory, store);

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={history}>
      {Routes()}
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;