import React, { Component } from 'react';

class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'State',
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
      <div className="content">
        <h2>{ this.state.name }</h2>
        <pre>
          { JSON.stringify(this.state, null, 2) }
        </pre>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" value={ this.state.inputValue } onChange={ this.handleInputChange } placeholder="Set some text for an item" />
          </div>
        </div>
        <a className="button" onClick={ this.handleAddItem }>Add</a>
        <a className="button" onClick={ this.handleClearItems }>Clear</a>
      </div>
    )
  }
}

export default Stateful;