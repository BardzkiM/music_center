import {getIsUserLogged} from '../modules/userData/selectors';
import {API} from '../constants';

export function requireAuth(nextState, replace) {
  const {store: {getState, dispatch}} = this.props;
  const isLogged = getIsUserLogged(getState());

  if (!isLogged) {
    replace('/login');
  }
}