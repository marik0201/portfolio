import axios from 'axios';

export const getInfoAbout = async () => {
  return await axios.get(`${process.env.SERVER_PATH}/api/profile/about`);
};
