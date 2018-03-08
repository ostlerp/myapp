import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActionsComponent from '../components/Actions';
import { getLaunches, clearLaunches } from '../../stores/launches';

class Actions extends Component {
  constructor(props) {
    super(props);

    this.handleFetchData = this.handleFetchData.bind(this);
    this.handleClearData = this.handleClearData.bind(this);
  }

  handleFetchData() {
    this.props.dispatch(getLaunches());
  }

  handleClearData() {
    this.props.dispatch(clearLaunches());
  }
  
  render() {
    const { launches } = this.props;
    
    console.log(launches.data ? Object.values(launches.data) : []);

    return (
      <ActionsComponent
        onFetchClick={ this.handleFetchData }
        onClearClick={ this.handleClearData }
        isLoading={ launches.isLoading || false }
        data={ launches.data ? Object.values(launches.data) : [] }
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    launches: state.launches
  };
}

export default connect(mapStateToProps)(Actions);