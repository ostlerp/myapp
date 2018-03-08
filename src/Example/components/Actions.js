import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Actions extends Component {
  render() {
    const { onFetchClick, onClearClick, isLoading, data } = this.props;

    return (
      <div className="content">
        <h2>Actions and Redux Example</h2>
        <p>Get the redux devtools: <a target="_blank" rel="noopener noreferrer" href="https://github.com/gaearon/redux-devtools">https://github.com/gaearon/redux-devtools</a></p>
        <div className="buttons">
          <a className={`button is-primary ${isLoading ? 'is-loading' : ''}`} onClick={ onFetchClick }>Fetch API data</a>
          <a className="button" onClick={ onClearClick }>Clear data</a>
        </div>

        { data && data.length > 0 && 
          <pre>
            { JSON.stringify(data, null, 2) }
          </pre>
        }
      </div>
    )
  }
}

Actions.propTypes = {
  onFetchClick: PropTypes.func.isRequired,
  onClearClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.array
}

export default Actions;