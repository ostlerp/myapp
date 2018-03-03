import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { example as exampleCopy } from '../../copy.json';

const Tab = ({name, display, activeTab, onClick}) => (
  <li className={ activeTab === name ? 'is-active': '' }>
    <a onClick={() => onClick(name)}>{ display }</a>
  </li>
);

class Interactions extends Component {
  render() {
    const { activeTab, onTabClick } = this.props;

    return (
      <React.Fragment>
        <section className="section">
          <div className="container">
            <div className="content">
                <h1>Examples</h1>
                <p>{ exampleCopy.explainer }</p>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="tabs">
              <ul>
                <Tab name="stateful" display="Stateful Containter" activeTab={ activeTab } onClick={ onTabClick } />
                <Tab name="actions" display="Actions and Global State" activeTab={ activeTab} onClick={ onTabClick } />
                <Tab name="forms" display="Forms" activeTab={ activeTab } onClick={ onTabClick } />
              </ul>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            { this.props.children }
          </div>
        </section>
      </React.Fragment>
    );
  }
}

Interactions.propTypes = {
  activeTab: PropTypes.string,
  onTabClick: PropTypes.func
};

export default Interactions;