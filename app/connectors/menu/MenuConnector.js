import {connect} from 'react-redux';

import Menu from '../../components/layout/header/menu/Menu';
import {getMenu} from '../../modules/menu/selectors';
import {CHANGE_MENU} from '../../modules/menu/actions';
import {USER_TYPE_UNLOGGED} from '../../constants';
import {CLEAR_USER_DATA} from '../../modules/userData/actions';

const mapStateToProps = state => ({
  menu: getMenu(state)
});

const mapDispatchToProps = dispatch => ({
  logOut: () => {
    dispatch(CHANGE_MENU(USER_TYPE_UNLOGGED));
    dispatch(CLEAR_USER_DATA());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);