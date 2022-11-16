import React from 'react';
import '../../styles/buttons.css';

const SecondaryButton = ({ value, children }) => {
    return (
        <>
            <button className='secondary-button' onClick={children}>{value}</button>
        </>
    );
}

export default SecondaryButton;