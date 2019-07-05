import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminPanelContacts from './AdminPanelContacts';
import {
  getContactInfo,
  editAddressInfo,
  editTelephoneInfo,
  editEmailInfo,
  toggleContactVisibility
} from './AdminPanelActions';

const AdminPanelContactsContainer = props => <AdminPanelContacts {...props} />;

const mapStateToProps = ({ adminPanel }) => ({
  adminPanel
});

const mapDispatchToProps = dispatch => ({
  getContacts: async () => {
    dispatch(getContactInfo());
  },
  editAddress: async address => {
    dispatch(editAddressInfo(address));
  },
  editTelephone: async telephone => {
    dispatch(editTelephoneInfo(telephone));
  },
  editEmail: async email => {
    dispatch(editEmailInfo(email));
  },
  toggleContactVisibility: async () => {
    dispatch(toggleContactVisibility());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanelContactsContainer);
