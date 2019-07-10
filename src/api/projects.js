import axios from 'axios';

export const getProjects = async () =>
  await axios.get('http://localhost:3000/api/profile/projects');

export const getProjectsPage = async page =>
  await axios.get(`http://localhost:3000/api/profile/projects/pages/${page}`);

export const getProjectsPages = async () =>
  await axios.get(`http://localhost:3000/api/profile/projects/pages`);

export const getProjectsNames = async () =>
  await axios.get(`http://localhost:3000/api/profile/projects/names`);

export const getProject = async id =>
  await axios.get(`http://localhost:3000/api/profile/projects/${id}`);
