import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Stateful extends Component {
  render() {
    const { onAddItem, onClearItems, onInputChange, data } = this.props;

    return (
      <div className="content">
        <h2>{ data.name }</h2>
        <pre>
          { JSON.stringify(data, null, 2) }
        </pre>
        <div className="field">
          <label className="label">Item</label>
          <div className="control">
            <input className="input" type="text" value={ data.inputValue } onChange={ onInputChange } placeholder="Set some text for an item" />
          </div>
        </div>
        <a className="button" onClick={ onAddItem }>Add</a>
        <a className="button" onClick={ onClearItems }>Clear</a>
      </div>
    )
  }
}

Stateful.propTypes = {
  onAddItem: PropTypes.func.isRequired,
  onClearItems: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

export default Stateful;