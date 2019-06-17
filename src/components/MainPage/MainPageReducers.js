import types from './MainPageTypes';

const initialState = {
  isLoaded: false
};

export const profile = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ON_PROFILE_LOADED_SUCCESS:
      console.log(payload);

      return { ...state, ...payload, isLoaded: true };

    default:
      return state;
  }
};
