import types from './AdminPanelTypes';

const initialState = {
  isProfileLoading: true,
  isProjectsLoading: true,
  isContactsLoading: true,
  projects: {}
};

export const adminPanel = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PROFILE_PAGE_LOADING:
      return { ...state, isProfileLoading: true };

    case types.PROFILE_PAGE_LOADED:
      return { ...state, isProfileLoading: false };

    case types.PROJECT_PAGE_LOADING:
      return { ...state, isProjectsLoading: true };

    case types.PROJECT_PAGE_LOADED:
      return { ...state, isProjectsLoading: false };

    case types.CONTACTS_PAGE_LOADING:
      return { ...state, isContactsLoading: true };

    case types.CONTACTS_PAGE_LOADED:
      return { ...state, isContactsLoading: false };

    case types.ON_CONTACTS_LOAD_SUCCESS:
      return { ...state, ...payload };

    case types.CONTACT_ADDRESS_EDIT_SUCCESS:
      return { ...state, address: payload };

    case types.CONTACT_ADDRESS_EDIT_FAILED:
      return { ...state };

    case types.CONTACT_TELEPHONE_EDIT_SUCCESS:
      return { ...state, telephone: payload };

    case types.CONTACT_TELEPHONE_EDIT_FAILED:
      return { ...state };

    case types.CONTACT_EMAIL_EDIT_SUCCESS:
      return { ...state, email: payload };

    case types.CONTACT_EMAIL_EDIT_FAILED:
      return { ...state };

    case types.CONTACT_VISIBILITY_CHANGE_SUCCESS:
      const isVisible = !state.isVisible;
      return { ...state, isVisible };

    case types.ON_PROFILE_LOAD_SUCCESS:
      return { ...state, ...payload };

    case types.ON_PROFILE_LOAD_FAILED:
      return { ...state };

    case types.PROJECTNAMES_LOAD_SUCCESS:
      return { ...state, projectNames: payload };

    case types.PROJECTNAMES_LOAD_FAILED:
      return { ...state };

    case types.PROJECT_INFO_LOAD_SUCCESS:
      const projects = state.projects;
      projects[payload._id] = payload;
      return { ...state, projects };

    case types.PROJECT_INFO_LOAD_FAILED:
      return { ...state };

    default:
      return state;
  }
};
