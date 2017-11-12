import {REQUEST_ADD_RENTAL} from '../../../modules/rental/actions';
import FormConnector from '../FormConnector';
import AddRental from '../../../components/pages/rental/add/AddRental';
import {getFormResponse} from '../../../modules/form/selectors';

const stateProps = {rentalId: getFormResponse};

export default FormConnector(AddRental, REQUEST_ADD_RENTAL, stateProps);