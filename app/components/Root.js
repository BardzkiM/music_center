import React from 'react';
import PropTypes from 'prop-types';
import {Router, hashHistory, Route} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import {Provider, connect} from 'react-redux';
import store from '../store/store';
import Routes from './routes/Routes';
import {LOADING} from '../locales';
import {getIsReady} from '../modules/boot/selectors';
import {CHECK_LOGIN} from '../modules/userData/actions';
import {requireAuth} from '../utils/auth';

export const isDebugMode = false;
const history = syncHistoryWithStore(hashHistory, store);

export class Root extends React.Component {
  componentWillMount() {
    this.props.checkAuth();
    this.requireAuth = requireAuth.bind(this);
  }

  render() {
    if (this.props.isReady) {
      return (
        <Provider store={store}>
          <Router history={history}>
            {Routes(this.requireAuth)}
          </Router>
        </Provider>
      );
    }

    return <div>{LOADING}</div>;
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isReady: getIsReady(state)
});

const mapDispatchToProps = dispatch => (  {
  checkAuth: () => dispatch(CHECK_LOGIN())
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);