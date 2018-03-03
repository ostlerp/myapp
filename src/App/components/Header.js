import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './Logo';

class Header extends Component {
  render() {
    return (
      <section className="hero is-info">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                  <Logo />
              </div>
              <div className="navbar-menu">
                <div className="navbar-end">
                  <NavLink to="/" activeClassName="is-active" exact={ true } className="navbar-item">Home</NavLink>
                  <NavLink to="/examples" activeClassName="is-active" className="navbar-item">Examples</NavLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    );
  }
};

export default Header;