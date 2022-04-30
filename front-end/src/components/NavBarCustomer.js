import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/NavBarCustomer.css';

function NavBarCustomer() {
  return (
    <nav>
      <div className="header">
        <img alt="Logo Delivery" className="logo" src={ logo } />
        <span className="user-name">
          Usuário
        </span>
      </div>
      <div className="links">
        <Link
          className={ window.location.pathname === '/customer/products' ? 'active' : '' }
          to="/customer/products"
        >
          Produtos
        </Link>
        <Link
          className={ window.location.pathname === '/customer/orders' ? 'active' : '' }
          to="/customer/orders"
        >
          Meus Pedidos
        </Link>
        <Link
          to="/login"
        >
          Sair
        </Link>
      </div>
    </nav>
  );
}

export default NavBarCustomer;
