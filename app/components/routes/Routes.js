import React from 'react';
import {Route} from 'react-router'

import MainLayout from '../layout/MainLayout';
import Login from '../../connectors/pages/LoginConnector';
import Register from '../../connectors/pages/RegisterConnector';

export default () =>
  <div>
    <Route path='/' component={MainLayout}>
      <Route path='login' component={Login}/>
      <Route path='register' component={Register}/>
    </Route>
  </div>;