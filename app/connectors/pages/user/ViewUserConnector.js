import {connect} from 'react-redux';
import ViewUser from '../../../components/pages/user/view/ViewUser';
import {REQUEST_USER} from '../../../modules/userData/actions';
import {getUser} from '../../../modules/userData/selectors';

const mapStateToProps = state => ({
  user: getUser(state)
});

const mapDispatchToProps = dispatch => ({
  getUser: data => dispatch(REQUEST_USER(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewUser);