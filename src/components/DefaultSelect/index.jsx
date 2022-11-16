import React from 'react';
import '../../styles/inputs.css';

const DefaultSelect = ({ mainValue, name, children }) => {
    return (
        <>
            <select className='default-select' name={name} id={name} >
                <option selected disabled>{mainValue}</option>
                {children}
            </select>
        </>
    );
}

export default DefaultSelect;