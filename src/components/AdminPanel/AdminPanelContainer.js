import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdminPanel from './AdminPanel';

const AdminPanelContainer = props => <AdminPanel {...props} />;

const mapStateToProps = ({ adminPanel: { isLoading } }) => ({
  isLoading
});

export default connect(mapStateToProps)(AdminPanelContainer);
