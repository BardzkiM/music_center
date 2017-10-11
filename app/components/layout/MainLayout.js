import React from 'react';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';

export default () => {
  return (
    <div className="MainLayout">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}