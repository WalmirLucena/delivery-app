import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestLogin = async (endpoint, body) => {
  const response = await api.post(endpoint, body);
  console.log(response);
  if(response.status !== 200) return { message: 'Erro, tente novamente'}
  return response.data;
};

export default api;
