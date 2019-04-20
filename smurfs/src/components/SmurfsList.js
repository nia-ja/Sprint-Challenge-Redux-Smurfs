import React, { Component } from 'react';
import { connect } from "react-redux";

import Smurf from "./Smurf";
import { getSmurfs, deleteSmurf } from "../actions";
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
    onClick = (id) => {
        this.props.deleteSmurf(id);
        // console.log(id);
    }
    render() {
        return(
            <div className="smurfs-list">
               {!this.props.fetchingSmurfs && this.props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} onClick={this.onClick} />)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  });
  
export default connect(
    mapStateToProps,
    { getSmurfs, deleteSmurf}
)(SmurfsList);