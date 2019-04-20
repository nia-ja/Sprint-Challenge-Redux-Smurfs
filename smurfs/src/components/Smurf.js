import React from "react";

const Smurf = props => {
    return (
        <div className="smurf">
            <div className="smurf-controls">
                <button className='edit'>✎</button>
                <button onClick={() => props.onClick(props.smurf.id)}>✘</button>
            </div>
            <div className="smurf-data">
                <table>
                    <tr>
                        <th>Name:</th>
                        <td>{props.smurf.name}</td>
                    </tr>
                    <tr>
                        <th>Age:</th>
                        <td>{props.smurf.age} smurf years</td>
                    </tr>
                    <tr>
                        <th>Height:</th>
                        <td>{props.smurf.height} cm</td>
                    </tr>
                </table>
            </div>
        </div>
    )   
};

export default Smurf;