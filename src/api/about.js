import axios from 'axios';

export const getInfoAbout = async () => {
  return await axios.get('http://localhost:3000/api/profile/about');
};
