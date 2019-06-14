import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const longstr = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a cumque ducimus quidem beatae tempora eum, iste impedit, aliquid porro iure esse earum maxime. Voluptatibus facilis placeat vero quae error! lorem
Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a cumque ducimus quidem beatae tempora eum, iste impedit, aliquid porro iure esse earum maxime. Voluptatibus facilis placeat vero quae error! lorem`;

export class About extends Component {
  render() {
    return (
      <section className="about">
        <h1 className="mb-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p>{longstr.substr(0, 200).concat('...')}</p>
        <Link
          to={{
            pathname: '/about',
            state: {
              aboutInfo: longstr
            }
          }}
          className="btn mb-1"
        >
          Show more
        </Link>
      </section>
    );
  }
}

export default About;
