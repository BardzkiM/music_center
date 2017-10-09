import React from 'react';
import {Route} from 'react-router'

import MainPage from '../pages/main/index';

export default () =>
  <div>
    <Route path="/" component={MainPage}>
    </Route>
  </div>;