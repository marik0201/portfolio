import React, { Component } from 'react';

import MyProjectItem from '../MyProjectItem/MyProjectItem';
import './style.scss';

export class MyProjects extends Component {
  state = {
    projectsPages: this.props.projectsPages,
    page: 1
  };

  changePage = async page => {
    if (this.props.pages[page - 1] !== undefined) {
      this.setState({
        page
      });
    } else {
      this.props.changePage(page).then(() => {
        this.setState({
          page
        });
      });
    }
  };

  nextPage = () => {
    console.log(':D');
  };

  render = () => {
    const page = this.state.page;
    return (
      <section className="mt-5 my-works">
        <h1 className="mt-4">Recent Work</h1>
        <div className="my-works-container">
          <div className="carousel-container">
            <div className="carousel-item">
              {this.props.pages[page - 1].map(project => (
                <MyProjectItem key={project._id} project={project} />
              ))}
            </div>
          </div>

          <ul className="uk-pagination uk-flex-center" data-uk-margin>
            <li className={page === 1 ? 'uk-disabled' : ''}>
              <a onClick={() => this.changePage(page - 1)}>
                <span data-uk-icon="arrow-left" />
              </a>
            </li>
            {[...this.props.pages.keys()].map(projectPage => (
              <li
                key={projectPage + 1}
                className={
                  projectPage + 1 === this.state.page ? 'uk-active' : ''
                }
              >
                <a onClick={() => this.changePage(projectPage + 1)}>
                  {projectPage + 1}
                </a>
              </li>
            ))}
            <li
              className={page === this.props.pages.length ? 'uk-disabled' : ''}
            >
              <a onClick={() => this.changePage(page + 1)}>
                <span data-uk-icon="arrow-right" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  };
}

export default MyProjects;
