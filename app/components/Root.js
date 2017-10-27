import React from 'react';
import PropTypes from 'prop-types';
import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import {Provider, connect} from 'react-redux';
import store from '../store/store';
import Routes from './routes/Routes';
import {LOADING} from '../locales';
import {getIsReady} from '../modules/boot/selectors';
import {CHECK_LOGIN} from '../modules/userData/actions';

export const isDebugMode = false;
const history = syncHistoryWithStore(hashHistory, store);

export class Root extends React.Component {
  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    if (this.props.isReady) {
      return (
        <Provider store={store}>
          <Router
            routes={Routes(store)}
            history={history}>
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