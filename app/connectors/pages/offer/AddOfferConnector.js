import AddOffer from '../../../components/pages/offer/add/AddOffer';
import FormConnector from '../FormConnector';
import {getItems} from '../../../modules/item/selectors';
import {REQUEST_FETCH_ITEMS} from '../../../modules/item/actions';
import {REQUEST_ADD_OFFER} from '../../../modules/offer/actions';
import {getFormResponse} from '../../../modules/form/selectors';

const stateProps = {items: getItems, offerId: getFormResponse};

const dispatchesProps = {
  fetchItems: REQUEST_FETCH_ITEMS()
};

export default FormConnector(AddOffer, REQUEST_ADD_OFFER, stateProps, dispatchesProps);