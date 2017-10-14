import React from 'react';
import {Route} from 'react-router'

import MainLayout from '../layout/MainLayout';
import Login from '../../connectors/pages/LoginConnector';

export default () =>
  <div>
    <Route path='/' component={MainLayout}>
      <Route path='login' component={Login}/>
    </Route>
  </div>;