import React from 'react';
import '../../styles/buttons.css';

const SecondaryButton = ({ value, callback, id }) => {
    return (
        <>
            <button className='secondary-button' id={id} onClick={(e) => callback(e)}>{value}</button>
        </>
    );
}

export default SecondaryButton;