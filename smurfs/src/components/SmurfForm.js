import React, { Component } from 'react';
import { connect } from "react-redux";
import { addSmurf } from "../actions";

import HideFormIcon from '../img/hide-icon.png';

class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          age: '',
          height: ''
        };
    }
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    addSmurf = event => {
        event.preventDefault();
        const newSmurf = {
          name: this.state.name,
          age: this.state.age,
          height: this.state.height
        }
        this.props.addSmurf(newSmurf);    
        this.setState({
          name: '',
          age: '',
          height: ''
        });
        this.props.hideForm();
    }
    render() {
        return (
          <div className="SmurfForm">
            <form onSubmit={this.addSmurf}>
              <input
                onChange={this.handleInputChange}
                placeholder="name"
                value={this.state.name}
                name="name"
                type="text"
                required
              />
              <input
                onChange={this.handleInputChange}
                placeholder="age"
                value={this.state.age}
                name="age"
                type="number"
                required
              />
              <input
                onChange={this.handleInputChange}
                placeholder="height in cm"
                value={this.state.height}
                name="height"
                type="number"
                required
              />
              {(this.state.name || this.state.age || this.state.height !== '') ?
              <button className="btn" type="submit" >Add Smurf</button> : <button className="btn not-active" type="submit">Add Smurf</button>}
              <img src={HideFormIcon} onClick={this.props.hideForm} alt="arrow pointing to the right"/>
            </form>
          </div>
        );
    }
}
  
const mapStateToProps = state => ({
    smurfs: state.smurfs,
    addingSmurf: state.addingSmurf,
    error: state.error
  });
  
export default connect(
    mapStateToProps,
    { addSmurf}
)(SmurfForm);