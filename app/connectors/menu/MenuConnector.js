import {connect} from 'react-redux';

import Menu from '../../components/layout/header/menu/Menu';
import {getMenu} from '../../modules/menu/selectors';
import {LOGOUT} from '../../modules/userData/actions';

const mapStateToProps = state => ({
  menu: getMenu(state)
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(LOGOUT())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);