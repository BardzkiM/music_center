import {connect} from 'react-redux';
import AddItem from '../../../components/pages/item/add/AddItem';
import {getFormResponse} from '../../../modules/form/selectors';
import {REQUEST_ADD_ITEM} from '../../../modules/item/actions';
import FormConnector from '../FormConnector';

const stateProps = {itemId: getFormResponse};

export default FormConnector(AddItem, REQUEST_ADD_ITEM, stateProps);