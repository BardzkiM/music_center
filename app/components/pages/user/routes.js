import React from 'react';
import {Route} from 'react-router';
import EditUserData from '../../../connectors/pages/user/EditUserDataConnector';
import ViewUser from '../../../connectors/pages/user/ViewUserConnector';
import UserOffersList from '../../../connectors/pages/user/UserOffersListConnector';

export default requireAuth =>
  <Route path='user'>
    <Route path='editData' component={EditUserData} onEnter={requireAuth}/>
    <Route path=':id' component={ViewUser} onEnter={requireAuth}/>
    <Route path=":id/offers" component={UserOffersList}/>
  </Route>;
