import React from 'react';
import Header from './header/Header'
import Content from './content/Content'

export default () => {
  return (
    <div className="MainLayout">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}