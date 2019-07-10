import axios from 'axios';
import LocalStorage from '../services/local-storage';

export const signIn = async (login, password) => {
  return await axios.post('http://localhost:3000/api/auth/login', {
    login,
    password
  });
};

export const getToken = async () => {
  const refreshToken = LocalStorage.getRefreshToken();
  return await axios.post('http://localhost:3000/api/auth/token', {
    token: refreshToken
  });
};
