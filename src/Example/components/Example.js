import React, { Component } from 'react';

import { example as exampleCopy } from '../../copy.json';

class Interactions extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Examples</h1>
            <p>{ exampleCopy.explainer }</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Interactions;