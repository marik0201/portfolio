import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AdminPanelProjects extends Component {
  constructor(props) {
    super(props);
    this.gitUserName = React.createRef();
    this.imageLinkRef = React.createRef();
    this.projectNameRef = React.createRef();
    this.readmeRef = React.createRef();
    this.props.getProjectNames();

    this.state = {
      selectedProjectId: ''
    };
  }

  selectProject = async id => {
    if (this.props.projects[id] !== undefined) {
      this.setState({
        selectedProjectId: id
      });
    } else {
      await this.props.getProjectInfo(id);
      this.setState({
        selectedProjectId: id
      });
    }
  };

  render() {
    const projectId = this.state.selectedProjectId;
    const project = this.props.projects[projectId];
    return (
      <>
        {this.props.isProjectsLoading ? (
          <div className="preloader" data-uk-spinner="ratio: 3" />
        ) : (
          <div className="admin-projects-container">
            <div className="git-edit-wrap input-edit-wrap">
              <input
                className="input-default"
                type="text"
                placeholder="input git username here"
                ref={this.gitUserName}
              />
              <a
                className="btn"
                onClick={() =>
                  this.props.editGitUserName(this.gitUserName.current.value)
                }
              >
                Edit
              </a>
            </div>
            <div className="mt-2">
              <button className="uk-button uk-button-default" type="button">
                Select project
              </button>
              <div data-uk-dropdown="pos: right-center">
                <ul className="uk-nav uk-dropdown-nav">
                  {this.props.projectNames.map(projectName => (
                    <li key={projectName._id}>
                      <a onClick={() => this.selectProject(projectName._id)}>
                        {projectName.projectName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {project && (
              <div className="project-container mt-2">
                <h3>{project.projectName}</h3>
                {project.image ? (
                  <img src={project.image} />
                ) : (
                  <span>No image</span>
                )}
                <div className="input-edit-wrap mt-2">
                  <input
                    className="input-default"
                    type="text"
                    placeholder="input new image link here"
                    ref={this.imageLinkRef}
                  />
                  <a
                    className="btn"
                    onClick={() =>
                      this.props.editImageLink(
                        this.imageLinkRef.current.value,
                        project._id
                      )
                    }
                  >
                    Edit
                  </a>
                </div>
                <div className="input-edit-wrap mt-2">
                  <input
                    className="input-default"
                    type="text"
                    placeholder="input new project name here"
                    ref={this.projectNameRef}
                  />
                  <a
                    className="btn"
                    onClick={() =>
                      this.props.editNameProject(
                        this.projectNameRef.current.value,
                        project._id
                      )
                    }
                  >
                    Edit
                  </a>
                </div>
                <h4>Readme</h4>
                {project.readme && (
                  <div className="mt-2">
                    <textarea
                      className="textarea-default"
                      defaultValue={project.readme}
                      ref={this.readmeRef}
                    />
                    <a
                      className="btn"
                      onClick={() =>
                        this.props.editProjectName(
                          this.projectNameRef.current.value,
                          project._id
                        )
                      }
                    >
                      Edit
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}

AdminPanelProjects.propTypes = {
  editGitUserName: PropTypes.func,
  getProjectNames: PropTypes.func,
  getProjectInfo: PropTypes.func,
  editNameProject: PropTypes.func,
  editImageLink: PropTypes.func,
  editReadme: PropTypes.func,
  isProjectsLoading: PropTypes.bool,
  projectNames: PropTypes.array,
  projects: PropTypes.object
};

export default AdminPanelProjects;
