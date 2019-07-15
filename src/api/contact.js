import axios from 'axios';

export const getContacts = async () => {
  return await axios.get(`${process.env.SERVER_PATH}/api/profile/contacts`);
};
