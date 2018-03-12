import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TabsComponent from '../components/Tabs';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabKey: ''
    };

    // This binding is necessary to make `this` work in the callback
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  componentDidMount() {
    const { defaultTabKey } = this.props;

    if(defaultTabKey) {
      this.setState({
        activeTabKey: defaultTabKey
      });
    }
  }

  handleTabClick(tabKey) {
    this.setState({
      activeTabKey: tabKey
    });
  }

  render() {
    const { activeTabKey } = this.state;
    const { tabs } = this.props;
    
    let content = null;

    if(activeTabKey) {
      let item = tabs.find(item => item.key === activeTabKey);
      content = (item || {}).content;
    }

    const tabDisplays = tabs.map(tab => ({
      isActive: tab.key === activeTabKey,
      display: tab.display,
      key: tab.key,
      onClick: () => this.handleTabClick(tab.key)
    }));

    return (
      <TabsComponent tabs={ tabDisplays }>
        { content }
      </TabsComponent>
    );
  }
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired,
      content: PropTypes.element
    })
  ),
  defaultTabKey: PropTypes.string
}

export default Tabs;
