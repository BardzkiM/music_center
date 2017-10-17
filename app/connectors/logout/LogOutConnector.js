import {connect} from 'react-redux';

import {LOGOUT} from '../../modules/userData/actions';
import LogOut from '../../components/partials/LogOut/LogOut';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(LOGOUT())
});

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);