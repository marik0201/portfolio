import types from './MainPageTypes.js';
import { getInfoAbout } from '../../api/about';
import { getContacts } from '../../api/contact';
import { getProjectsPage, getProjectsPages } from '../../api/projects';

export const onProfileLoadedSuccess = payload => ({
  type: types.ON_PROFILE_LOADED_SUCCESS,
  payload
});

export const onProfileLoadedFailed = payload => ({
  type: types.ON_PROFILE_LOADED_FAILED,
  payload
});

export const onPageLoadedSuccess = payload => ({
  type: types.ON_PAGE_LOADED_SUCCESS,
  payload
});

export const onPageLoadedFailed = payload => ({
  type: types.ON_PAGE_LOADED_FAILED,
  payload
});

export const getProfile = () => async dispatch => {
  try {
    const about = await getInfoAbout();
    const contacts = await getContacts();
    const projects = await getProjectsPage(0);
    const projectsPages = await getProjectsPages();

    const pages = [projects.data.projects];
    pages.length = projectsPages.data.projectsPages;

    dispatch(
      onProfileLoadedSuccess({
        about: about.data.about[0],
        contacts: contacts.data.contacts[0],
        pages
      })
    );
  } catch (error) {
    dispatch(onProfileLoadedFailed(error));
  }
};

export const changePage = page => async dispatch => {
  try {
    const projects = await getProjectsPage(page - 1);

    dispatch(onPageLoadedSuccess({ projects: [projects.data.projects], page }));
  } catch (error) {
    dispatch(onPageLoadedFailed());
  }
};
