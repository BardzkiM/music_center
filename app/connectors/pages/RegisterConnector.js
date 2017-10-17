import {connect} from 'react-redux';
import Register from '../../components/pages/register/Register';
import {getStatus, getError} from '../../modules/form/selectors';
import {REQUEST_DATA} from '../../modules/form/actions';
import {REQUEST_REGISTER} from '../../modules/userData/actions';
import {SHOW_NOTIFICATION} from '../../modules/notification/actions';

const mapStateToProps = state => ({
  formStatus: getStatus(state),
  error: getError(state)
});

const mapDispatchToProps = dispatch => ({
  sendRegisterData: data => {
    dispatch(REQUEST_DATA());
    dispatch(REQUEST_REGISTER(data));
  },
  showNotification: payload => dispatch(SHOW_NOTIFICATION(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);