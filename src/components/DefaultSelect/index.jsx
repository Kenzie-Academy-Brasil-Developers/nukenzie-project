import React from 'react';
import '../../styles/inputs.css';

const DefaultSelect = ({ mainValue, name, children }) => {
    return (
        <>  
            <label htmlFor={name}>{mainValue}</label>
            <select className='default-select' name={name} id={name} >
                <option selected disabled>{mainValue}</option>
                {children}
            </select>
        </>
    );
}

export default DefaultSelect;