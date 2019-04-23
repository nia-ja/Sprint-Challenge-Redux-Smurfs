import React, { Component } from 'react';
import { connect } from "react-redux";

import Smurf from "./Smurf";
import { getSmurfs, deleteSmurf } from "../actions";


class SmurfsList extends Component {
    componentDidMount() {
        this.props.getSmurfs();
    }
    onClick = (id) => {
        this.props.deleteSmurf(id);
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