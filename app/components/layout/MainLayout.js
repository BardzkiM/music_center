import React from 'react';
import classNames from 'classnames';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';
import Notification from '../../connectors/notification/NotificationConnector';
import Modal from '../../connectors/modal/ModalConnector';
import './MainLayout.scss';

export default ({children, showModal}) => (
  <div className={classNames('MainLayout', {'showModal': showModal})}>
    <Notification/>
    <Modal/>
    <Header/>
    <Content content={children}/>
    <Footer/>
  </div>
);