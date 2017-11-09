import React from 'react';
import {Route} from 'react-router';
import AddItem from '../../../connectors/pages/item/AddItemConnector';
import ViewItem from '../../../connectors/pages/item/ViewItemConnector';

export default requireAuth =>
  <Route path='item'>
    <Route path='add' component={AddItem} onEnter={requireAuth}/>
    <Route path=':id' component={ViewItem} onEnter={requireAuth}/>
  </Route>;
