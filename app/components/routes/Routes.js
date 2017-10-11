import React from 'react';
import {Route} from 'react-router'

import MainLayout from '../layout/MainLayout';

export default () =>
  <div>
    <Route path="/" component={MainLayout}>
    </Route>
  </div>;