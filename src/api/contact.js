import axios from 'axios';

export const getContacts = async () => {
  return await axios.get('http://localhost:3000/api/profile/contacts');
};
