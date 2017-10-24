import {connect} from 'react-redux';
import AddItem from '../../../components/pages/item/add/AddItem';
import {getStatus, getError} from '../../../modules/form/selectors';
import {REQUEST_DATA} from '../../../modules/form/actions';
import {SHOW_NOTIFICATION} from '../../../modules/notification/actions';

const mapStateToProps = state => ({
  formStatus: getStatus(state),
  error: getError(state)
});

const mapDispatchToProps = dispatch => ({
  sendItemData: data => {
    dispatch(REQUEST_DATA());
    //TODO
  },
  showNotification: payload => dispatch(SHOW_NOTIFICATION(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);