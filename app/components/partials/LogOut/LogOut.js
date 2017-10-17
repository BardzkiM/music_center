import React from 'react';
import {LOG_OUT} from '../../../locales';

export default ({logOut}) =>
  <div className="logout-button" onClick={logOut}>{LOG_OUT}</div>
