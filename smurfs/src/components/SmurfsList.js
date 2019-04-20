import React, { Component } from 'react';
import { connect } from "react-redux";

// import { Smurf } from "../components";
import { getSmurfs } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class SmurfsList extends Component {
    componentDidMount() {
        this.props.getSmurfs();
    }
  render() {
    return (
      <h1>Smurf</h1>
    );
  }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  });
  
export default connect(
    mapStateToProps,
    { getSmurfs}
)(SmurfsList);