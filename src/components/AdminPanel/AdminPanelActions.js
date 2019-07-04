import types from './AdminPanelTypes';
import cogoToast from 'cogo-toast';
import { getContacts } from '../../api/contact';
import {
  editContactAddress,
  editContactTelephone,
  editContactEmail
} from '../../api/admin/contact';

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
