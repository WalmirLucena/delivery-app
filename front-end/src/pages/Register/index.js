import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import RegisterInput from './RegisterInput';
import DeliveryContext from '../../context/DeliveryContext';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { setNewUser } = useContext(DeliveryContext);
  const history = useHistory();

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

  const verifyResponse = async (response) => {
    const { role } = response;
    if (role === 'register') return '/login';
    return false;
  };

  const register = async (event) => {
    event.preventDefault();
    const endpoint = '/register';
    const response = await request(endpoint, { fullName, email, password }, 'post');
    if (response.message) {
      toast.error(response.message);
    }
    setNewUser(response);
    history.push(verifyResponse(response));
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
          onClick={ (event) => register(event) }
          type="submit"
        >
          CADASTRAR
        </button>
        <div data-testid="common_register__element-invalid_register">
          <ToastContainer
            data-testid="common_login__element-invalid-email"
            position="top-center"
          />
        </div>
      </form>
    </div>
  );
}

export default Register;
