import React from 'react';
import {Link} from 'react-router';

import './Menu.scss';

export default ({menu, logIn, logOut}) => (
  <div className='Menu'>
    <ul>
      {
        menu.map((menuItem, index) =>
          <li key={`menu-item-${index}`}>
            <Link to={menuItem.get('path')}>{menuItem.get('name')}</Link>
          </li>
        )
      }
    </ul>
    <button onClick={logIn}>LOG IN</button>
    <button onClick={logOut}>LOG OUT</button>
  </div>
);