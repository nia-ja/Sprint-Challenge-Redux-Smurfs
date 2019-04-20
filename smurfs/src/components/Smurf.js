import React from "react";

const Smurf = props => {
    return (
        <div className="smurf">
            <div className="smurf-controls">
                <button onClick={() => props.onClick(props.smurf.id)}>✘</button>
                <button>✎</button>
            </div>
            <div className="smurf-data">
                <p>Name: {props.smurf.name}</p>
                <p>Age: {props.smurf.age}</p>
                <p>Height: {props.smurf.height}</p>
            </div>
        </div>
    )   
};

export default Smurf;