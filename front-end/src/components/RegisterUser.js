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
          className="input-name"
        />
        <input
          type="text"
          placeholder="Email"
          className="input-email"
        />
        <input
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
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}

export default UserRegister;
