import React from 'react';
import Logo from './logo/Logo';
import Menu from '../../../connectors/menu/MenuConnector';
import './Header.scss';

export default () => {
  return (
    <div className='Header'>
      <Logo/>
      <Menu/>
    </div>
  );
};