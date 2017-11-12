import React from 'react';
import {Route} from 'react-router';
import AddRental from '../../../connectors/pages/rental/AddRentalConnector';

export default requireAuth =>
  <Route path='rental'>
    <Route path='add/:id' component={AddRental} onEnter={requireAuth}/>
  </Route>;
