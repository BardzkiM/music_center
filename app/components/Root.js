import React from 'react';
import PropTypes from 'prop-types';
import {Router, hashHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {Provider, connect} from 'react-redux';

import store from '../store/store';
import Routes from './routes/Routes';
import {LOADING} from "../locales";

const history = syncHistoryWithStore(hashHistory, store);

export class Root extends React.Component {
  componentDidMount() {
    //TODO CHECK AUTH
  }

  render() {
    const {store: {isReady}} = this.props;

    //TODO
    //if (isReady) {
    return (
      <Provider store={store}>
        <Router history={history}>
          {Routes()}
        </Router>
      </Provider>
    );
    //} else {
    //  return <div>{LOADING}</div>
    //}
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isReady: state.isReady
});

const mapDispatchToProps = dispatch => (
  {} //TODO CHECK AUTH
);

export default connect(mapStateToProps, mapDispatchToProps)(Root);