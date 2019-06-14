import React, { Component } from 'react';
import './style.scss';

export class About extends Component {
  render() {
    return (
      <section className="about">
        <h1 className="mb-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio
          quia suscipit iure officia minus nemo animi voluptatem! Est alias rem
          hic autem explicabo totam earum, labore dolor debitis necessitatibus!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
          praesentium nemo expedita in perferendis vel delectus, placeat debitis
          ipsam unde, illo cupiditate amet impedit nihil. Earum fugiat placeat
          suscipit laudantium.
        </p>
        <a className="btn mb-1">Show more</a>
      </section>
    );
  }
}

export default About;
