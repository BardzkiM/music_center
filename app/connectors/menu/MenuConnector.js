import {connect} from 'react-redux';

import Menu from '../../components/layout/header/menu/Menu';
import {getMenu} from '../../modules/menu/selectors';
import {CHANGE_MENU} from '../../modules/menu/actions';
import {USER_TYPE_LOGGED, USER_TYPE_UNLOGGED} from '../../constants';

const mapStateToProps = state => ({
  menu: getMenu(state)
});

const mapDispatchToProps = dispatch => ({
  logIn: () => dispatch(CHANGE_MENU(USER_TYPE_LOGGED)),
  logOut: () => dispatch(CHANGE_MENU(USER_TYPE_UNLOGGED))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);