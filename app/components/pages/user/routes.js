import React from 'react';
import {Route} from 'react-router';
import EditUserData from '../../../connectors/pages/user/EditUserDataConnector';
import ViewUser from '../../../connectors/pages/user/ViewUserConnector';
import UserOffersList from '../../../connectors/pages/user/UserOffersListConnector';
import MyRentalsList from '../../../connectors/pages/user/MyRentalsListConnector';
import ViewMyProfile from '../../../connectors/pages/user/ViewMyProfileConnector';

export default requireAuth =>
  <Route path='user'>
    <Route path='editData' component={EditUserData} onEnter={requireAuth}/>
    <Route path="myRentals" component={MyRentalsList} onEnter={requireAuth}/>
    <Route path="myProfile" component={ViewMyProfile} onEnter={requireAuth}/>
    <Route path=':id' component={ViewUser} onEnter={requireAuth}/>
    <Route path=":id/offers" component={UserOffersList} onEnter={requireAuth}/>
  </Route>;
