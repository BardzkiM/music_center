import React from 'react';
import {Route} from 'react-router';
import MainLayout from '../../connectors/mainLayout/MainLayoutConnector';
import Login from '../../connectors/pages/LoginConnector';
import Register from '../../connectors/pages/RegisterConnector';
import itemRoutes from '../pages/item/routes';
import userRoutes from '../pages/user/routes';
import offerRoutes from '../pages/offer/routes';
import rentalRoutes from '../pages/rental/routes';

export default requireAuth =>
  <Route path='/' component={MainLayout}>
    <Route path='login' component={Login}/>
    <Route path='register' component={Register}/>
    {itemRoutes(requireAuth)}
    {userRoutes(requireAuth)}
    {offerRoutes(requireAuth)}
    {rentalRoutes(requireAuth)}
  </Route>;