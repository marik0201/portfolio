import types from './AdminPanelTypes';

const initialState = {};

export const adminPanel = (state = initialState, { type, payload }) => {
  switch (type) {
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

    default:
      return state;
  }
};
