import React from 'react';
import '../styles/RegisterUser.css';

function UserRegister() {
  return (
    <div className="user-register">
      <div>
        <h1>Cadastrar novo usuário</h1>
      </div>
      <form className="register-form">
        <input
          type="text"
          placeholder="Name"
          data-testid="common_register__input-name"
          className="input-name"
        />
        <input
          type="text"
          placeholder="Email"
          data-testid="common_register__input-email"
          className="input-email"
        />
        <input
          data-testid="common_register__input-password"
          type="password"
          placeholder="Password"
          className="input-password"
        />
        <select name="Tipo" id="Tipo" className="select-type">
          <option value="1">Cliente</option>
          <option value="2">Vendedor</option>
          <option value="3">Administrador</option>
        </select>
        <button
          type="submit"
          className="btn-register"
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}

export default UserRegister;
