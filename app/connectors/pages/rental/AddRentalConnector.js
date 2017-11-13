import {REQUEST_ADD_RENTAL} from '../../../modules/rental/actions';
import FormConnector from '../FormConnector';
import AddRental from '../../../components/pages/rental/add/AddRental';
import {getFormResponse} from '../../../modules/form/selectors';
import {getOffer} from '../../../modules/offer/selectors';
import {REQUEST_GET_OFFER} from '../../../modules/offer/actions';

const stateProps = {
  rentalId: getFormResponse,
  offer: getOffer
};

const dispatchesProps = {
  getOffer: REQUEST_GET_OFFER
};

export default FormConnector(AddRental, REQUEST_ADD_RENTAL, stateProps, dispatchesProps);