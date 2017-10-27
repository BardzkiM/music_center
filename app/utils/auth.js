import {getIsUserLogged} from '../modules/userData/selectors';

export function requireAuth(nextState, replace) {
  const {store: {getState, dispatch}} = this.props;
  const isLogged = getIsUserLogged(getState());

  if (!isLogged) {
    replace('/login');
  }
}