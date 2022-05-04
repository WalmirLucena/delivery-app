import React, { useContext } from 'react';
import DeliveryContext from '../context/DeliveryContext';
import logo from '../images/logo.png';

import '../styles/Header.css';

function Header() {
  const { user } = useContext(DeliveryContext);
  console.log(user);
  return (
    <div className="header">
      <img alt="Logo Delivery" className="logo" src={ logo } />
      <span className="user-name">
        { user ? user.name : 'usuário' }
      </span>
    </div>
  );
}

export default Header;
