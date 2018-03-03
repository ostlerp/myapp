import React, { Component } from 'react';

class Actions extends Component {
  render() {
    return (
      <div className="content">
        <h3>Get the redux devtools: <a target="_blank" rel="noopener noreferrer" href="https://github.com/gaearon/redux-devtools">https://github.com/gaearon/redux-devtools</a></h3>
        <a className="button is-primary">Fetch cat</a>
      </div>
    )
  }
}

export default Actions;