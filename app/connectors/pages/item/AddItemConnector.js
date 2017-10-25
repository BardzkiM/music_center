import {connect} from 'react-redux';
import AddItem from '../../../components/pages/item/add/AddItem';
import {getStatus, getError, getFormResponse} from '../../../modules/form/selectors';
import {REQUEST_DATA} from '../../../modules/form/actions';
import {SHOW_NOTIFICATION} from '../../../modules/notification/actions';
import {REQUEST_ADD_ITEM} from '../../../modules/item/actions';

const mapStateToProps = state => ({
  formStatus: getStatus(state),
  error: getError(state),
  itemId: getFormResponse(state)
});

const mapDispatchToProps = dispatch => ({
  sendItemData: data => {
    dispatch(REQUEST_DATA());
    dispatch(REQUEST_ADD_ITEM(data));
  },
  showNotification: payload => dispatch(SHOW_NOTIFICATION(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);