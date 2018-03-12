import React, { Component } from 'react';
import PropTypes from 'prop-types'

const Tab = ({ display, isActive, onClick }) => (
  <li className={ isActive ? 'is-active': '' }>
    <a onClick={ onClick }>{ display }</a>
  </li>
);

class Tabs extends Component {
  render() {
    const { tabs } = this.props;

    return (
      <React.Fragment>
        <section>
          <div className="container">
            <div className="tabs">
              <ul>
                { tabs.map(tab => <Tab display={ tab.display } key={ tab.key } isActive={ tab.isActive } onClick={ tab.onClick } />) }
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
    )
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      isActive: PropTypes.bool.isRequired,
      key: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  )  
};

export default Tabs;