import {isDebugMode} from '../../components/Root';

export const getLoggedUser = state => state.userData.get('loggedUser');
export const getIsUserLogged = state => !!getLoggedUser(state).size || isDebugMode;

export const getUser = state => state.userData.get('user');