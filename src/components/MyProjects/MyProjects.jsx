import React, { Component } from 'react';

import './style.scss';
import MyProjectItem from '../MyProjectItem/MyProjectItem';

export class MyProjects extends Component {
  render() {
    return (
      <section className="mt-5 my-works">
        <h1 className="mt-4">Recent Work</h1>
        <div className="my-works-container">
          {this.props.projects.map(project => (
            <MyProjectItem key={project._id} project={project} />
          ))}
        </div>
      </section>
    );
  }
}

export default MyProjects;
