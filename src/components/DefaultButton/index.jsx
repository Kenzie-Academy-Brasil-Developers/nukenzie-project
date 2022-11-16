import React from 'react';
import "./index.css"

const DefaultButton = ({ value, target }) => {
    return (
        <>
            {target
                ?
                <button className='default-button' onClick={() => target()}>{value}</button>
                :
                <button className='default-button'>{value}</button>
            }
        </>
    );
}

export default DefaultButton;