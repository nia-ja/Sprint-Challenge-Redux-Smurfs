import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Smurf extends Component {
    
    render() {
        return (
            <div className="smurf">
                <div className="smurf-controls">
                    <Link to={`/edit/${this.props.smurf.id}`}><button className='edit'>✎</button></Link>
                    <button onClick={() => this.props.onClick(this.props.smurf.id)}>✘</button>
                </div>
                <div className="smurf-data">
                    <table>
                        <tbody>
                            <tr>
                                <th>Name:</th>
                                <td>{this.props.smurf.name}</td>
                            </tr>
                            <tr>
                                <th>Age:</th>
                                <td>{this.props.smurf.age} smurf years</td>
                            </tr>
                            <tr>
                                <th>Height:</th>
                                <td>{this.props.smurf.height} cm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )   
    };
}
  
export default Smurf;