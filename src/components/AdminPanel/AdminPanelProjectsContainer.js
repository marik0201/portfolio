import React from 'react';
import { connect } from 'react-redux';
import AdminPanelProjects from './AdminPanelProjects';
import {
  editGitUserName,
  getProjectNames,
  getProjectInfo,
  editNameProject,
  editImageLink,
  editReadme
} from './AdminPanelActions';

const AdminPanelProjectsContainer = props => <AdminPanelProjects {...props} />;

const mapStateToProps = ({
  adminPanel: { isProjectsLoading, projectNames, projects }
}) => ({
  isProjectsLoading,
  projectNames,
  projects
});

const mapDispatchToProps = dispatch => ({
  editGitUserName: async username => {
    dispatch(editGitUserName(username));
  },
  getProjectNames: async () => {
    dispatch(getProjectNames());
  },
  getProjectInfo: async id => {
    dispatch(getProjectInfo(id));
  },
  editNameProject: async (name, id) => {
    dispatch(editNameProject(name, id));
  },
  editImageLink: async (link, id) => {
    dispatch(editImageLink(link, id));
  },
  editReadme: async (readme, id) => {
    dispatch(editReadme(readme, id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanelProjectsContainer);
