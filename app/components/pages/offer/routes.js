import React from 'react';
import {Route} from 'react-router';
import AddOffer from '../../../connectors/pages/offer/AddOfferConnector';
import SearchOffers from '../../../connectors/pages/offer/SearchOffersConnector';
import ViewOffer from '../../../connectors/pages/offer/ViewOfferConnector';

export default requireAuth =>
  <Route path='offer'>
    <Route path='add' component={AddOffer} onEnter={requireAuth}/>
    <Route path='search' component={SearchOffers}/>
    <Route path=':id' component={ViewOffer}/>
  </Route>;
