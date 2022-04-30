import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBarAdmin.css';
import Header from './Header';

function NavBarAdmin() {
  return (
    <>
      <Header />
      <nav>
        <div className="links">
          <Link
            className={
              window.location.pathname === '/admin/manage' ? 'active' : ''
            }
            to="/admin/manage"
          >
            GERENCIAR USUÁRIOS
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

export default NavBarAdmin;
