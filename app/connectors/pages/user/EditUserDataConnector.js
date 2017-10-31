import {connect} from 'react-redux';
import EditUserData from '../../../components/pages/user/edit/EditUserData';
import FormConnector from '../FormConnector';
import {getLoggedUser} from '../../../modules/userData/selectors';

const stateProps = {userData: getLoggedUser};

export default FormConnector(EditUserData, () => 0, stateProps);