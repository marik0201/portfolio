import axios from 'axios';
import LocalStorage from '../../services/local-storage';

export const uploadAvatarImage = async avatar => {
  return await axios.post(
    `${process.env.SERVER_PATH}/api/admin/profile/avatar`,
    avatar,
    {
      headers: {
        Authorization: 'JWT ' + LocalStorage.getToken()
      }
    }
  );
};

export const editLinkGit = async link => {
  const linkedinlink = link;
  return await axios.post(
    `${process.env.SERVER_PATH}/api/admin/about/githublink`,
    { linkedinlink },
    {
      headers: {
        Authorization: 'JWT ' + LocalStorage.getToken()
      }
    }
  );
};

export const editLinkLinkedin = async link => {
  const githublink = link;
  return await axios.post(
    `${process.env.SERVER_PATH}/api/admin/about/linkedinlink`,
    { githublink },
    {
      headers: {
        Authorization: 'JWT ' + LocalStorage.getToken()
      }
    }
  );
};

export const editShortText = async text => {
  const shorttext = text;
  return await axios.post(
    `${process.env.SERVER_PATH}/api/admin/about/shorttext`,
    { shorttext },
    {
      headers: {
        Authorization: 'JWT ' + LocalStorage.getToken()
      }
    }
  );
};

export const editText = async text => {
  return await axios.post(
    `${process.env.SERVER_PATH}/api/admin/about/text`,
    { text },
    {
      headers: {
        Authorization: 'JWT ' + LocalStorage.getToken()
      }
    }
  );
};
