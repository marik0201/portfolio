import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import './style.scss';

class MyProjectItem extends Component {
  constructor(props) {
    super(props);
    this.languages = require('../../enums/languageImages');
    this.img = this.props.project.image
      ? // ? `data:image/jpeg;base64,${arrayBufferToBase64(project.image.data)}`
        this.props.project.image
      : require(`../../assets/icons/${
          this.languages.default[this.props.project.projectLanguage]
        }.png`);

    this.modalRef = React.createRef();
    this.state = {
      isModalOpen: false
    };
  }

  render() {
    const project = this.props.project;
    const isModalOpen = this.state.isModalOpen;
    return (
      <>
        <div className="my-works__item mb-3 uk-animation-slide-right-medium">
          <div className={!project.image ? `modal-image-wrap` : ''}>
            <img
              // data-uk-toggle={`target: #modal-center${project._id}`}
              onClick={() =>
                this.setState(prevState => ({
                  isModalOpen: !prevState.isModalOpen
                }))
              }
              src={this.img}
            />
          </div>
          <span>{project.projectName}</span>
        </div>
        {isModalOpen && (
          <div
            id={`modal-center${project._id} `}
            className="uk-flex-top uk-flex uk-open"
            data-uk-modal
            ref={this.modalRef}
          >
            <div className="modal uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
              <button className="uk-modal-close-default" data-uk-close />
              <div className={!project.image ? `modal-image-wrap` : ''}>
                <img src={this.img} />
              </div>
              <h2>
                <a href={project.projectUrl}>{project.projectName}</a>
              </h2>
              {project.readme && (
                <div className="project-readme">
                  <ReactMarkdown source={project.readme} />
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default MyProjectItem;
