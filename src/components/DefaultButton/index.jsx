import React from 'react';
import '../../styles/buttons.css';

const DefaultButton = ({ type = 'button', value, children }) => {
    return (
        <>
            <button type={type} className='default-button' onClick={children}>{value}</button>
        </>
    );
}

export default DefaultButton;