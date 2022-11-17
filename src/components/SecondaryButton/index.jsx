import React from 'react';
import '../../styles/buttons.css';

const SecondaryButton = ({ value, callback, id, active }) => {
    return (
        <>
            <button className={active ? 'active-button' : 'secondary-button'} id={id} onClick={(e) => callback(e)}>{value}</button>
        </>
    );
}

export default SecondaryButton;