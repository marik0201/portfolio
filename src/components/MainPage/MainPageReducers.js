import types from './MainPageTypes';

const initialState = {
  isLoaded: false
};

export const profile = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ON_PROFILE_LOADED_SUCCESS:
      return { ...state, ...payload, isLoaded: true };

    case types.ON_PAGE_LOADED_SUCCESS: {
      const pages = state.pages;
      pages[payload.page - 1] = payload.projects[0];

      return { ...state, pages };
    }

    default:
      return state;
  }
};
