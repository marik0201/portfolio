import { getInfoAbout } from '../../api/about';
import { getContacts } from '../../api/contact';
import types from './MainPageTypes.js';

export const onProfileLoadedSuccess = payload => ({
  type: types.ON_PROFILE_LOADED_SUCCESS,
  payload
});

export const onProfileLoadedFailed = payload => ({
  type: types.ON_PROFILE_LOADED_FAILED,
  payload
});

export const getProfile = () => async dispatch => {
  try {
    const about = await getInfoAbout();
    const contacts = await getContacts();
    dispatch(
      onProfileLoadedSuccess({
        about: about.data.about[0],
        contacts: contacts.data.contacts[0]
      })
    );
  } catch (error) {
    dispatch(onProfileLoadedFailed(error));
  }
};
