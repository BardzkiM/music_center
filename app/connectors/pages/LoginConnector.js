import {connect} from 'react-redux';
import Login from '../../components/pages/login/Login';
import {getStatus} from '../../modules/form/selectors';
import {REQUEST_DATA} from '../../modules/form/actions';
import {SEND_LOGIN_REQUEST} from '../../modules/userData/actions';

const mapStateToProps = state => ({
  formStatus: getStatus(state)
});

const mapDispatchToProps = dispatch => ({
  sendLoginData: data => {
    dispatch(REQUEST_DATA());
    dispatch(SEND_LOGIN_REQUEST(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);