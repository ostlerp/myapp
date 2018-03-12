import React, { Component } from 'react';

import ExampleComponent from '../components/Example';
import Tabs from '../../App/containers/Tabs';
import Stateful from './Stateful';
import Actions from './Actions';
import Forms from './Forms';

class Example extends Component {
  render() {
    return (
      <React.Fragment>
        <ExampleComponent />
        <Tabs 
          tabs={[{
            key: 'stateful',
            display: 'Stateful Components',
            content: <Stateful />
          }, {
            key: 'actions',
            display: 'Actions and State with Redux',
            content: <Actions />
          }, {
            key: 'forms',
            display: 'Forms',
            content: <Forms />
          }]}
          defaultTabKey="stateful"
        />
      </React.Fragment>
    );
  }
};

export default Example;