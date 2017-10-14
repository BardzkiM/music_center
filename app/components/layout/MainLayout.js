import React from 'react';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';

import './MainLayout.scss';

export default props => (
  <div className='MainLayout'>
    <Header/>
    <Content content={props.children}/>
    <Footer/>
  </div>
);