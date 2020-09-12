import React from 'react';

import './Error.css'
import icon from './errorBike1.png'

const Error = () => {
    return (
        <div className="mainError">
            <img src={icon} alt="error-icon" className="errorIcon"/>
            <p className="errorDescription">Probably someone put a stick in the server</p>
        </div>
    );
};

export default Error;