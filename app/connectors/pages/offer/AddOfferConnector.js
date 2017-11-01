//import {REQUEST_LOGIN} from '../../modules/userData/actions';
import AddOffer from '../../../components/pages/offer/add/AddOffer';
import FormConnector from '../FormConnector';
import {getItems} from '../../../modules/item/selectors';
import {REQUEST_FETCH_ITEMS} from '../../../modules/item/actions';

const stateProps = {items: getItems};

const dispatchesProps = {
  fetchItems: REQUEST_FETCH_ITEMS()
};

export default FormConnector(AddOffer, null, stateProps, dispatchesProps);