import React, { Component } from 'react';

import './Hero.css';
import heroImage from './shane-rounce-205187-unsplash.jpg';
import { home as homeCopy } from '../../content/copy.json';
import Logo from '../../App/components/Logo';

class Hero extends Component {
  render () {
    return (
      <section className="hero is-fullheight" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                  <h1 className="title has-text-light is-size-2">
                    <Logo />
                  </h1>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered has-text-left-desktop">
            <h1 className="title has-text-light">
              { homeCopy.title }
            </h1>
            <h2 className="subtitle has-text-light">
              { homeCopy.subtitle }
            </h2>
            <p>
              <a className="button is-medium">{ homeCopy.cta }</a>
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero;