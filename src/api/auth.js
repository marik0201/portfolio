import axios from 'axios';
import LocalStorage from '../services/local-storage';

export const signIn = async (login, password) => {
  return await axios.post(`${process.env.SERVER_PATH}/api/auth/login`, {
    login,
    password
  });
};

export const getToken = async () => {
  const refreshToken = LocalStorage.getRefreshToken();
  return await axios.post(`${process.env.SERVER_PATH}/api/auth/token`, {
    token: refreshToken
  });
};
