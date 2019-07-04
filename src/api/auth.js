import axios from 'axios';

export const signIn = async (login, password) => {
  return await axios.post('http://localhost:3000/api/auth/login', {
    login,
    password
  });
};
