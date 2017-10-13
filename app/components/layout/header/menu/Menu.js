import React from 'react';
import {Link} from 'react-router';

import './Menu.scss';

export default ({menu, logIn, logOut}) => (
  <div className="Menu">
    {
      menu.map((menuItem, index) =>
        <div className="menu-item" key={`menu-item-${index}`}>
          <Link to={menuItem.get('path')}>{menuItem.get('name')}</Link>
        </div>
      )
    }
    <div className="login-buttons">
      <div className="login-button" onClick={logIn}>LOG IN</div>
      <div className="logout-button" onClick={logOut}>LOG OUT</div>
    </div>
  </div>
);