import {REQUEST_REGISTER} from '../../modules/userData/actions';
import Register from '../../components/pages/register/Register';
import FormConnector from './FormConnector';

export default FormConnector(Register, REQUEST_REGISTER);