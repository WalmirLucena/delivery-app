import React, { useState } from 'react';
import RegisterInput from './RegisterInput';

function Register() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const validateName = () => {
    const MIN_NAME_LENGTH = 12;
    return fullName.length > MIN_NAME_LENGTH;
  };

  const validateEmail = () => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = () => {
    const MIN_PASSWORD = 6;
    return password.length > MIN_PASSWORD;
  };

  return (
    <div className="login-background">
      <h1>Faça seu Cadastro!</h1>
      <form className="register-form">
        <RegisterInput
          name="fullName"
          onChange={ ({ target }) => setFullName(target.value) }
          value={ fullName }
        />
        <RegisterInput
          name="email"
          onChange={ ({ target }) => setEmail(target.value) }
          value={ email }
        />
        <RegisterInput
          name="password"
          onChange={ ({ target }) => setPassword(target.value) }
          value={ password }
        />
        <button
          className="register-button"
          data-testid="register-submit-btn"
          disabled={ !validateEmail() || !validatePassword() || !validateName() }
          type="submit"
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}

export default Register;
