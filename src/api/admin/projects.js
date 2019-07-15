import axios from 'axios';
import LocalStorage from '../../services/local-storage';

export const editGit = async username => {
  return await axios.post(
    `${process.env.SERVER_PATH}/api/admin/projects/git-user`,
    {
      username
    },
    {
      headers: {
        Authorization: 'JWT ' + LocalStorage.getToken(),
        'Content-Type': 'application/json'
      }
    }
  );
};

export const editProjectImage = async (imageLink, projectId) => {
  return await axios.post(
    `${process.env.SERVER_PATH}/api/admin/projects/${projectId}/image`,
    {
      imageLink
    },
    {
      headers: {
        Authorization: 'JWT ' + LocalStorage.getToken(),
        'Content-Type': 'application/json'
      }
    }
  );
};

export const editProjectName = async (projectName, projectId) => {
  return await axios.post(
    `${process.env.SERVER_PATH}/api/admin/projects/${projectId}/name`,
    {
      projectName
    },
    {
      headers: {
        Authorization: 'JWT ' + LocalStorage.getToken(),
        'Content-Type': 'application/json'
      }
    }
  );
};

export const editProjectReadme = async (readme, projectId) => {
  return await axios.post(
    `${process.env.SERVER_PATH}/api/admin/projects/${projectId}/name`,
    {
      readme
    },
    {
      headers: {
        Authorization: 'JWT ' + LocalStorage.getToken(),
        'Content-Type': 'application/json'
      }
    }
  );
};
