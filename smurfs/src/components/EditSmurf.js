import React, { Component } from 'react';
import { connect } from "react-redux";
import { editSmurf } from '../actions';


class EditSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          age: '',
          height: '',
          id: null
        };
    }
    componentDidMount() {
        const id = Number(this.props.match.params.id);
        let smurfById = this.props.smurfs.filter(smurf => smurf.id === id);
        smurfById = smurfById[0];
        this.setState({
            name: smurfById.name,
            age: smurfById.age,
            height: smurfById.height,
            id: smurfById.id
        })
    }
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    editSmurf = event => {
        event.preventDefault();
        const updatedSmurf = {
          name: this.state.name,
          age: this.state.age,
          height: this.state.height
        }
        this.props.editSmurf(this.state.id, updatedSmurf);    
        this.setState({
          name: '',
          age: '',
          height: ''
        });
        this.props.history.push('/');
      }
  render() {
    return (
        <div className="edit-smurf">
            <form onSubmit={this.editSmurf}>
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
                <button className="btn" type="submit">Edit Smurf</button>
            </form>
        </div>
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
    { editSmurf }
)(EditSmurf);