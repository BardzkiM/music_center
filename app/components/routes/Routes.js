import React from 'react';
import {Route} from 'react-router'

import MainLayout from '../layouts/main/index';

export default () =>
  <div>
    <Route path="/" component={MainLayout}>
    </Route>
  </div>;