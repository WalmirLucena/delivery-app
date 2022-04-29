import React from 'react';
import RegisterInput from './RegisterInput';

function Register() {
  return (
    <div className="login-background">
      <h1>Faça seu Cadastro!</h1>
      <form className="register-form">
        <RegisterInput
          name="name"
          onChange={ ({ target }) => setName(target.value) }
          placeholder="Seu Nome"
          // value={ name }
        />
        <RegisterInput
          name="email"
          onChange={ ({ target }) => setEmail(target.value) }
        // value={ email }
        />
        <RegisterInput
          name="password"
          onChange={ ({ target }) => setPassword(target.value) }
          // value={ password }
        />
        <button
          className="register-button"
          data-testid="login-submit-btn"
          // disabled={ !validateEmail() || !validatePassword() }
          type="submit"
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}

export default Register;
