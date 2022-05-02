import React from 'react';
import logo from '../images/logo.png';

import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <img alt="Logo Delivery" className="logo" src={ logo } />
      <span className="user-name">
        Usuário
      </span>
    </div>
  );
}

export default Header;
