import React from 'react';
import '../../styles/buttons.css';

const DefaultButton = ({ value, children }) => {
    return (
        <>
            <button className='default-button' onClick={children}>{value}</button>
        </>
    );
}

export default DefaultButton;