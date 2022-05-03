import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import LoginInput from './LoginInput';
import { requestLogin } from '../../services/requests';
import 'react-toastify/dist/ReactToastify.css';

import logo from '../../images/logo.png';
import './Login.css';
import DeliveryContext from '../../context/DeliveryContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(DeliveryContext);
  const history = useHistory();
  // const senha = '$#zebirita#$';
  // const adm = '--adm2@21!!--';

  const validateEmail = () => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = () => {
    const MIN_PASSWORD = 6;
    return password.length > MIN_PASSWORD;
  };

  const verifyResponse = (response) => {
    const { role } = response;
    if (role === 'customer') return `/${role}/products`;
    if (role === 'seller') return `/${role}/orders`;
    if (role === 'administrator') return '/admin/manage';
    return false;
  };

  const login = async (event) => {
    event.preventDefault();
    const endpoint = '/login';
    const response = await requestLogin(endpoint, { email, password });
    if (response.message) {
      toast.error(response.message);
    }
    setUser(response);
    history.push(verifyResponse(response));
  };

  return (
    <div className="login-background">
      <img alt="logo" className="logo" src={ logo } />
      <form className="login-form">
        <LoginInput
          name="email"
          onChange={ ({ target }) => setEmail(target.value) }
          value={ email }
        />
        <LoginInput
          name="password"
          onChange={ ({ target }) => setPassword(target.value) }
          value={ password }
        />
        <button
          className="login-button"
          data-testid="login-submit-btn"
          disabled={ !validateEmail() || !validatePassword() }
          type="submit"
          onClick={ (event) => login(event) }
        >
          LOGIN
        </button>
        <ToastContainer
          position="top-center"
        />
        <Link
          className="register-button"
          data-testid="register-btn"
          to="/register"
        >
          Ainda não tenho conta
        </Link>
      </form>
    </div>
  );
}

export default Login;
