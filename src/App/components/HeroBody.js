import React, { Component } from 'react';

import { home as homeCopy } from '../../copy.json';

class HeroBody extends Component {
  render () {
    return (
      <section className="hero is-info is-large">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              { homeCopy.title }
            </h1>
            <h2 className="subtitle">
              { homeCopy.subtitle }
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default HeroBody;