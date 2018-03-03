import React, { Component } from 'react';

import { app as appCopy } from '../../copy.json';

class Logo extends Component {
  render () {
    return (
      <h1 className="title has-text-light is-size-2">
        <div className="app-logo">{ appCopy.name }</div>
      </h1>
    );
  };
}

export default Logo;