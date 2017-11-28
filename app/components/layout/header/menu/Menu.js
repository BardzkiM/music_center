import React from 'react';
import {Link} from 'react-router';
import './Menu.scss';
import LogOut from '../../../../connectors/logout/LogOutConnector';
import LogIn from '../../../partials/LogIn/LogIn';

export default ({menu, user, logOut}) => {
  const isUserLogged = user && !user.isEmpty();
  return (
  <div className="Menu">
    {
      menu.map((menuItem, index) =>
        <div className="menu-item" key={`menu-item-${index}`}>
          <Link to={menuItem.get('path')}>{menuItem.get('name')}</Link>
        </div>
      )
    }
    <div className="login-buttons">
      {isUserLogged && <LogOut />}
      {!isUserLogged && <LogIn />}
    </div>
  </div>
)};