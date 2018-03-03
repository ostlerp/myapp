import React, { Component } from 'react';

import Interactions from '../components/Interactions';
import Stateful from './Stateful';
import Actions from './Actions';
import Forms from './Forms';

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'stateful'
    };

    // This binding is necessary to make `this` work in the callback
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tab) {
    this.setState({
      activeTab: tab
    });
  }

  render() {
    let content;

    switch(this.state.activeTab){
      case 'forms':
        content = <Forms />;
        break;
      case 'actions':
        content = <Actions />;
        break;
      case 'stateful':
      default:
        content = <Stateful />;
        break;
    }

    return (
      <Interactions activeTab={ this.state.activeTab } onTabClick={ this.handleTabClick }>
        { content }
      </Interactions>
    );
  }
};

export default Example;