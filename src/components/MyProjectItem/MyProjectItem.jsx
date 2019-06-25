import React from 'react';

import { arrayBufferToBase64 } from '../../helpers/base64convert';
import ReactMarkdown from 'react-markdown';
import './style.scss';

const MyProjectItem = ({ project }) => {
  const languages = require('../../enums/languageImages');

  const img = project.image
    ? `data:image/jpeg;base64,${arrayBufferToBase64(project.image.data)}`
    : require(`../../assets/icons/${
        languages.default[project.projectLanguage]
      }.png`);

  return (
    <>
      <div className="my-works__item mb-3 uk-animation-slide-right-medium">
        <div className={!project.image ? `modal-image-wrap` : ''}>
          <img
            data-uk-toggle={`target: #modal-center${project._id}`}
            src={img}
          />
        </div>
        <span>{project.projectName}</span>
      </div>
      <div
        id={`modal-center${project._id}`}
        className="uk-flex-top"
        data-uk-modal
      >
        <div className="modal uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button className="uk-modal-close-default" data-uk-close />
          <div className={!project.image ? `modal-image-wrap` : ''}>
            <img src={img} />
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
    </>
  );
};

export default MyProjectItem;
