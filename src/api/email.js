import axios from 'axios';

export const sendMessageToEmail = async (name, email, message) => {
  return axios.post(`${process.env.SERVER_PATH}/api/profile/email`, {
    name,
    email,
    message
  });
};
