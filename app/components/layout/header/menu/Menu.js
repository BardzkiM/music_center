import React from 'react';
import {Link} from 'react-router';

import './Menu.scss';
import {LOG_OUT} from "../../../../locales";

export default ({menu, logOut}) => (
  <div className="Menu">
    {
      menu.map((menuItem, index) =>
        <div className="menu-item" key={`menu-item-${index}`}>
          <Link to={menuItem.get('path')}>{menuItem.get('name')}</Link>
        </div>
      )
    }
    <div className="login-buttons">
      <div className="logout-button" onClick={logOut}>{LOG_OUT}</div>
    </div>
  </div>
);