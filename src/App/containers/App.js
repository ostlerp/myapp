import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../../Home/components/Home';
import Example from '../../Example/containers/Example';

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Route exact path="/" component={ Home } />
          <Route path="/examples" component={ Example } />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;