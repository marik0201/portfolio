import React, { Component } from 'react';

import './style.scss';

export class MyWorks extends Component {
  render() {
    return (
      <section className="mt-5 my-works">
        <h1 className="mt-4">Recent Work</h1>
        <div className="my-works-container">
          <div className="my-works__item mb-3">
            <img
              data-uk-toggle="target: #modal-center"
              src="https://images.unsplash.com/photo-1560291544-5e71ac7776c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            />

            <span>Title</span>
          </div>
          <div className="my-works__item mb-3">
            <img src="https://images.unsplash.com/photo-1560291544-5e71ac7776c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <span>Title</span>
          </div>
          <div className="my-works__item mb-3">
            <img src="https://images.unsplash.com/photo-1560291544-5e71ac7776c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <span>Title</span>
          </div>
          <div className="my-works__item mb-3">
            <img src="https://images.unsplash.com/photo-1560291544-5e71ac7776c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <span>Title</span>
          </div>
        </div>
        <div id="modal-center" className="uk-flex-top" data-uk-modal>
          <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
            <button className="uk-modal-close-default" data-uk-close />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default MyWorks;
