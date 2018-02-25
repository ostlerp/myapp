import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import * as firebase from 'firebase';

import Home from '../../Home/containers/Home';

class App extends React.Component {
  componentDidMount() {
    // firebase.database().ref('test/').set({
    //   one: 'one',
    //   two: 'two',
    //   three: 3
    // });
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={ Home } />
      </Router>
    )
  }
}

export default App;