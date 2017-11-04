import {connect} from 'react-redux';
import EditUserData from '../../../components/pages/user/edit/EditUserData';
import FormConnector from '../FormConnector';
import {getLoggedUser} from '../../../modules/userData/selectors';
import {REQUEST_USER_DATA_CHANGE} from '../../../modules/userData/actions';

const stateProps = {userData: getLoggedUser};

export default FormConnector(EditUserData, REQUEST_USER_DATA_CHANGE, stateProps);