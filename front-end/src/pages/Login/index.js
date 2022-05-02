import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginInput from './LoginInput';
import requestLogin from '../../services/requests';

import logo from '../../images/logo.png';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = () => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = () => {
    const MIN_PASSWORD = 6;
    return password.length > MIN_PASSWORD;
  };

  const login = async (event) => {
    event.preventDefault();
    await requestLogin(endpoint, { email, password });
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
          onClick={ (event) => login(event)}
        >
          LOGIN
        </button>
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
