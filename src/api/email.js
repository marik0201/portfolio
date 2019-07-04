import axios from 'axios';

export const sendMessageToEmail = async (name, email, message) => {
  return axios.post('http://localhost:3000/api/profile/email', {
    name,
    email,
    message
  });
};
