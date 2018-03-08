import React, { Component } from 'react';

import StatefulComponent from '../components/Stateful';

class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Component State Example',
      items: [],
      inputValue: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleClearItems = this.handleClearItems.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleAddItem() {
    if(!this.state.inputValue) {
      return;
    }
    
    let items = this.state.items || [];
    items.push(this.state.inputValue);
    this.setState({
      items,
      inputValue: ''
    });
  }

  handleClearItems() {
    this.setState({
      items: [],
      inputValue: ''
    });
  }
  
  render() {
    return (
      <StatefulComponent 
        onAddItem={ this.handleAddItem }
        onClearItems={ this.handleClearItems }
        onInputChange={ this.handleInputChange }
        data={ this.state }
      />
    )
  }
}

export default Stateful;