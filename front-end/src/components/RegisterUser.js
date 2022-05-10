import React, { useState } from 'react';
import '../styles/RegisterUser.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminManageInput from './AdminManageInput';
import { request } from '../services/requests';

function UserRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const setToastify = (response) => {
    if (response.message) {
      toast.error(response.message);
    } else {
      toast.sucess('Usuário cadastrado com sucesso!!');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = { name, email, password, role };
    console.log(newUser);
    const endpoint = '/register';
    const response = await request(endpoint, newUser, 'post');
    setToastify(response);
  };

  const validateName = () => {
    const MIN_NAME_LENGTH = 12;
    return name.length >= MIN_NAME_LENGTH;
  };

  const validateEmail = () => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = () => {
    const MIN_PASSWORD = 6;
    return password.length >= MIN_PASSWORD;
  };

  return (
    <div className="user-register">

      <div>
        <h1>Cadastrar novo usuário</h1>
      </div>
      <form className="register-form">
        <AdminManageInput
          placeholder="Nome e Sobrenome"
          name="name"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
        <AdminManageInput
          placeholder="seu-email@site.com.br"
          name="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <AdminManageInput
          placeholder="**********"
          name="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <select
          name="role"
          value={ role }
          className="select-role"
          onChange={ ({ target }) => setRole(target.value) }
        >
          <option value="customer">Cliente</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
        </select>
        <button
          type="submit"
          className="btn-register"
          disabled={ !validateEmail() || !validatePassword() || !validateName() }
          data-testid="admin_manage__button-register"
          onClick={ (event) => handleSubmit(event) }
        >
          CADASTRAR
        </button>
      </form>
      <ToastContainer
        position="top-center"
      />

    </div>
  );
}

export default UserRegister;
