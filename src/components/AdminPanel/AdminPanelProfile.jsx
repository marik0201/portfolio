import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export class AdminPanelProfile extends Component {
  constructor(props) {
    super(props);

    this.props.getInfoAbout();
    this.descriptionRef = React.createRef();
    this.gitLinkRef = React.createRef();
    this.linkedinRef = React.createRef();
    this.textRef = React.createRef();

    this.state = {
      uploadedFile: null
    };
  }

  editDescription = () => {
    this.props.editDescription(this.descriptionRef.current.value);
  };

  editGitLink = () => {
    this.props.editGitLink(this.descriptionRef.current.value);
  };

  editLinkedinLink = () => {
    this.props.editLinkedinLink(this.linkedinRef.current.value);
  };

  editText = () => {
    this.props.editTextInfo(this.textRef.current.state.value);
  };

  uploadFile = () => {
    const avatar = new FormData();
    avatar.append('avatar', this.state.uploadedFile);
    this.props.uploadAvatar(avatar);
  };

  onChangeFile = () => {
    this.setState({
      uploadedFile: event.target.files[0]
    });
  };

  render() {
    return (
      <>
        {this.props.isProfileLoading ? (
          <div className="preloader" data-uk-spinner="ratio: 3" />
        ) : (
          <div className="admin-profile-wrap">
            <h3>Profile photo</h3>
            <div className="avatar-edit-wrap">
              <input type="file" onChange={this.onChangeFile} />
              <a type="button" className="btn" onClick={this.uploadFile}>
                Upload File
              </a>
            </div>

            <h3>Edit description</h3>
            <div className="shortText-edit-wrap">
              <input
                className="input-default"
                type="text"
                placeholder={this.props.shortText}
                ref={this.descriptionRef}
              />
              <a className="btn" onClick={this.editDescription}>
                Edit
              </a>
            </div>

            <h3>Edit linkedin link</h3>
            <div className="ldLink-edit-wrap">
              <input
                className="input-default"
                type="text"
                placeholder={this.props.linkedinLink}
                ref={this.linkedinRef}
              />
              <a className="btn" onClick={this.editLinkedinLink}>
                Edit
              </a>
            </div>

            <h3>Edit github link</h3>
            <div className="gitLink-edit-wrap">
              <input
                className="input-default"
                type="text"
                placeholder={this.props.githubLink}
                ref={this.gitLinkRef}
              />
              <a className="btn" onClick={this.editGitLink}>
                Edit
              </a>
            </div>

            <h3>Edit section about</h3>
            <ReactQuill
              theme="snow"
              value={this.props.text}
              ref={this.textRef}
            />
            <a className="btn quill-btn mt-1" onClick={this.editText}>
              Edit
            </a>
          </div>
        )}
      </>
    );
  }
}

export default AdminPanelProfile;
