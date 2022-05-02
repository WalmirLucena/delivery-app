import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBarSeller.css';
import Header from './Header';

function NavBarSeller() {
  return (
    <>
      <Header />
      <nav>
        <div className="links">
          <Link
            className={ window.location.pathname === '/seller/orders' ? 'active' : '' }
            to="/seller/orders"
          >
            PEDIDOS
          </Link>
          <Link
            to="/login"
          >
            SAIR
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBarSeller;
