import {connect} from 'react-redux';
import {getLoggedUser} from '../../../modules/userData/selectors';
import ViewMyProfile from '../../../components/pages/user/view/ViewMyProfile';

const mapStateToProps = state => ({
  loggedUser: getLoggedUser(state)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ViewMyProfile);