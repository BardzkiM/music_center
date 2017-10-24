import React from 'react';
import {Route} from 'react-router';
import AddItem from '../../../connectors/pages/item/AddItemConnector';

export default () =>
  <Route path='item'>
    <Route path='add' component={AddItem}/>
  </Route>
