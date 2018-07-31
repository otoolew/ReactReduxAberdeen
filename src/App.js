import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './App.css';
import Header from './ClientApp/Home/Header';
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
        />
        {this.props.children}
      </div>     
    );
  }
}
App.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
