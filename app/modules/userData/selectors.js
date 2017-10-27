import {isDebugMode} from '../../components/Root';

export const getLoggedUser = state => state.userData;
export const getIsUserLogged = state => !!Object.keys(getLoggedUser(state) || {}).length || isDebugMode;