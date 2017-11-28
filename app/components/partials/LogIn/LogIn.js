import React from 'react';
import {Link} from 'react-router';
import {LOG_IN} from '../../../locales';

export default ({logOut}) =>
  <div className="logout-button">
    <Link to='/login'>{LOG_IN}</Link>
  </div>
