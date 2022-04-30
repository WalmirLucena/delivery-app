import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBarCustomer.css';
import Header from './Header';

function NavBarCustomer() {
  return (
    <>
      <Header />
      <nav>
        <div className="links">
          <Link
            className={
              window.location.pathname === '/customer/products' ? 'active' : ''
            }
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
    </>
  );
}

export default NavBarCustomer;
