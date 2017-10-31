import React from 'react';
import {Route} from 'react-router';
import EditUserData from '../../../connectors/pages/user/EditUserDataConnector';

export default requireAuth =>
  <Route path='user'>
    <Route path='editData' component={EditUserData} onEnter={requireAuth}/>
  </Route>;
