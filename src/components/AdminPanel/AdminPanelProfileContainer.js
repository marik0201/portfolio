import React from 'react';
import { connect } from 'react-redux';
import AdminPanelProfile from './AdminPanelProfile';
import {
  uploadImage,
  getAboutInfo,
  editDescription,
  editLinkedinLink,
  editGitLink,
  editTextInfo
} from './AdminPanelActions';

const AdminPanelProfileContainer = props => <AdminPanelProfile {...props} />;

const mapStateToProps = ({
  adminPanel: { shortText, text, linkedinLink, githubLink }
}) => ({
  shortText,
  text,
  linkedinLink,
  githubLink
});

const mapDispatchToProps = dispatch => ({
  uploadAvatar: async avatar => {
    dispatch(uploadImage(avatar));
  },
  getInfoAbout: async () => {
    dispatch(getAboutInfo());
  },
  editDescription: async description => {
    dispatch(editDescription(description));
  },
  editLinkedinLink: async link => {
    dispatch(editLinkedinLink(link));
  },
  editGitLink: async link => {
    dispatch(editGitLink(link));
  },
  editTextInfo: async text => {
    dispatch(editTextInfo(text));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanelProfileContainer);
