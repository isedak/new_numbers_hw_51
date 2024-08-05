import React from 'react'
import './Ball.css'

const Ball = (props) => {
    return (
        <div className={`Ball-box ${props.classColor}`}>
            <div className="Ball-number">{props.ballNumber}</div>
        </div>
    )
};

export default Ball;