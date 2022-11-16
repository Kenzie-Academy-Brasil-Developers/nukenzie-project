import React from 'react';
import "./index.css"

const DefaultButton = ({ value, target }) => {
    return <button className='default-button' onClick={() => target(false)}>{value}</button>;
}

export default DefaultButton;