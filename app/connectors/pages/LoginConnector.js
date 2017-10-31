import {REQUEST_LOGIN} from '../../modules/userData/actions';
import Login from '../../components/pages/login/Login';
import FormConnector from './FormConnector';

export default FormConnector(Login, REQUEST_LOGIN);