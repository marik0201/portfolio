import types from './AdminPanelTypes';
import cogoToast from 'cogo-toast';
import { getContacts } from '../../api/contact';
import {
  editContactAddress,
  editContactTelephone,
  editContactEmail,
  changeContactsVisibiliy
} from '../../api/admin/contact';
import {
  uploadAvatarImage,
  editShortText,
  editLinkGit,
  editLinkLinkedin,
  editText
} from '../../api/admin/profile';
import { getInfoAbout } from '../../api/about';

export const onContactsLoadSuccess = payload => ({
  type: types.ON_CONTACTS_LOAD_SUCCESS,
  payload
});

export const onContactAddressEditFailed = payload => ({
  type: types.CONTACT_ADDRESS_EDIT_FAILED,
  payload
});

export const onContactAddressEditSuccess = payload => ({
  type: types.CONTACT_ADDRESS_EDIT_SUCCESS,
  payload
});

export const onContactTelephoneEditSuccess = payload => ({
  type: types.CONTACT_TELEPHONE_EDIT_SUCCESS,
  payload
});

export const onContactTelephoneEditFailed = payload => ({
  type: types.CONTACT_TELEPHONE_EDIT_FAILED,
  payload
});

export const onContactEmailEditSuccess = payload => ({
  type: types.CONTACT_EMAIL_EDIT_SUCCESS,
  payload
});

export const onContactEmailEditFailed = payload => ({
  type: types.CONTACT_EMAIL_EDIT_FAILED,
  payload
});

export const contactVisibilityChangeSuccess = payload => ({
  type: types.CONTACT_VISIBILITY_CHANGE_SUCCESS,
  payload
});

export const onProfileLoadSuccess = payload => ({
  type: types.ON_PROFILE_LOAD_SUCCESS,
  payload
});

export const onProfileLoadFailed = payload => ({
  type: types.ON_PROFILE_LOAD_FAILED,
  payload
});

export const onShortTextEditSuccess = payload => ({
  type: types.SHORTTEXT_EDIT_SUCCESS,
  payload
});

export const onShortTextEditFailed = payload => ({
  type: types.SHORTTEXT_EDIT_FAILED,
  payload
});

export const onGitLinkEditSuccess = payload => ({
  type: types.GITLINK_EDIT_SUCCESS,
  payload
});

export const onGitLinkEditFailed = payload => ({
  type: types.GITLINK_EDIT_FAILED,
  payload
});

export const onLDEditSuccess = payload => ({
  type: types.LDLINK_EDIT_SUCCESS,
  payload
});

export const onLDEditFailed = payload => ({
  type: types.LDLINK_EDIT_FAILED,
  payload
});

export const onTextEditSuccess = payload => ({
  type: types.TEXT_EDIT_SUCCESS,
  payload
});

export const onTextEditFailed = payload => ({
  type: types.TEXT_EDIT_FAILED,
  payload
});

export const editAddressInfo = address => async dispatch => {
  try {
    if (!address) {
      return cogoToast.warn('address is empty');
    }

    await editContactAddress(address);
    cogoToast.success('address was changed');

    dispatch(onContactAddressEditSuccess(address));
  } catch (error) {
    cogoToast.error('Server Error');
    dispatch(onContactAddressEditFailed());
  }
};

export const editTelephoneInfo = telephone => async dispatch => {
  try {
    if (!telephone) {
      return cogoToast.warn('address is empty');
    }

    await editContactTelephone(telephone);
    cogoToast.success('telephone was changed');

    dispatch(onContactTelephoneEditSuccess(telephone));
  } catch (error) {
    cogoToast.error('Server Error');
    dispatch(onContactTelephoneEditFailed());
  }
};

export const editEmailInfo = email => async dispatch => {
  try {
    if (!email) {
      return cogoToast.warn('email is empty');
    }

    await editContactEmail(email);
    cogoToast.success('email was changed');

    dispatch(onContactEmailEditSuccess(email));
  } catch (error) {
    cogoToast.error('Server Error');
    dispatch(onContactEmailEditFailed());
  }
};

export const getContactInfo = () => async dispatch => {
  try {
    const contacts = await getContacts();
    dispatch(onContactsLoadSuccess(contacts.data.contacts[0]));
  } catch (error) {
    cogoToast.error('Server Error');
  }
};

export const toggleContactVisibility = () => async dispatch => {
  try {
    await changeContactsVisibiliy();
    cogoToast.success('Visibility was changed');
    dispatch(contactVisibilityChangeSuccess());
  } catch (error) {
    cogoToast.error('Server Error');
  }
};

export const uploadImage = avatar => async dispatch => {
  try {
    await uploadAvatarImage(avatar);
    cogoToast.success('Avatar was updated');
  } catch (error) {
    cogoToast.error('Server error');
  }
};

export const getAboutInfo = () => async dispatch => {
  try {
    const about = await getInfoAbout();
    dispatch(onProfileLoadSuccess(about.data.about[0]));
  } catch (error) {
    dispatch(onProfileLoadFailed());
    cogoToast.error('Server Error');
  }
};

export const editDescription = text => async dispatch => {
  try {
    await editShortText(text);
    cogoToast.success('Description was updated');
    dispatch(onShortTextEditSuccess());
  } catch (error) {
    cogoToast.error('Server error');
    dispatch(onShortTextEditFailed());
  }
};

export const editGitLink = link => async dispatch => {
  try {
    await editLinkGit(link);
    cogoToast.success('Git link was updated');
    dispatch(onGitLinkEditSuccess());
  } catch (error) {
    cogoToast.error('Server error');
    dispatch(onGitLinkEditFailed());
  }
};

export const editLinkedinLink = link => async dispatch => {
  try {
    await editLinkLinkedin(link);
    cogoToast.success('Linkedin link was updated');
    dispatch(onLDEditSuccess());
  } catch (error) {
    cogoToast.error('Server error');
    dispatch(onLDEditFailed());
  }
};

export const editTextInfo = text => async dispatch => {
  try {
    await editText(text);
    cogoToast.success('Text was updated');
    dispatch(onTextEditSuccess);
  } catch (error) {
    cogoToast.error('Server error');
    dispatch(onTextEditFailed());
  }
};
