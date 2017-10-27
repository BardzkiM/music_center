import {isDebugMode} from '../../components/Root';

export const getLoggedUser = state => state.userData;
export const getIsUserLogged = state => !!getLoggedUser(state).size || isDebugMode;