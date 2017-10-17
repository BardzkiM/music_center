import React from 'react';
import {Route} from 'react-router'

import MainLayout from '../layout/MainLayout';
import Login from '../../connectors/pages/LoginConnector';
import Register from '../../connectors/pages/RegisterConnector';
import {PATHS} from '../../modules/menu/menus';

export default () =>
  <div>
    <Route path={PATHS.HOME_PAGE.path} component={MainLayout}>
      <Route path={PATHS.LOG_IN.path} component={Login}/>
      <Route path={PATHS.REGISTER.path} component={Register}/>
    </Route>
  </div>;