import {connect} from 'react-redux';
import Register from '../../components/pages/register/Register';
import {getStatus} from '../../modules/form/selectors';
import {REQUEST_DATA} from '../../modules/form/actions';
import {SEND_REGISTER_REQUEST} from '../../modules/userData/actions';

const mapStateToProps = state => ({
  formStatus: getStatus(state)
});

const mapDispatchToProps = dispatch => ({
  sendRegisterData: data => {
    dispatch(REQUEST_DATA());
    dispatch(SEND_REGISTER_REQUEST(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);