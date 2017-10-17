import React from 'react';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';
import Notification from '../../connectors/notification/NotificationConnector';

import './MainLayout.scss';

export default props => (
  <div className='MainLayout'>
    <Notification />
    <Header/>
    <Content content={props.children}/>
    <Footer/>
  </div>
);