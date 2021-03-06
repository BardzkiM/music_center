import React from 'react';
import {Link} from 'react-router';
import {PATHS} from '../../../modules/menu/menus';
import {BACK_TO_HOME} from '../../../locales';

export default () =>
  <div className="link-wrapper">
    <Link to={PATHS.HOME_PAGE.path}>{BACK_TO_HOME}</Link>
  </div>;