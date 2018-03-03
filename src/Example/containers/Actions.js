import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActionsComponent from '../components/Actions';
import { getDogs } from '../../stores/dogs';

class Actions extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getDogs());
  }
  
  render() {
    return (
      <ActionsComponent />
    )
  }
}

export default connect()(Actions);