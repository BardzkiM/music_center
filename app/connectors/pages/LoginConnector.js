import {connect} from 'react-redux';
import Login from '../../components/pages/login/Login';
import {getStatus, getError} from '../../modules/form/selectors';
import {REQUEST_DATA} from '../../modules/form/actions';
import {REQUEST_LOGIN} from '../../modules/userData/actions';
import {SHOW_NOTIFICATION} from '../../modules/notification/actions';

const mapStateToProps = state => ({
  formStatus: getStatus(state),
  error: getError(state)
});

const mapDispatchToProps = dispatch => ({
  sendLoginData: data => {
    dispatch(REQUEST_DATA());
    dispatch(REQUEST_LOGIN(data));
  },
  showNotification: payload => dispatch(SHOW_NOTIFICATION(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);