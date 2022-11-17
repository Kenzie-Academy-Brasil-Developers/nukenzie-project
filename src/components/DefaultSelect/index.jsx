import React from 'react';
import '../../styles/inputs.css';

const DefaultSelect = ({ mainValue, name, children }) => {
    return (
        <>  
            <div className='defaultInput'>
                <label htmlFor={name}>{mainValue}</label>
                <select className='default-select' name={name} id={name} >
                    <option selected disabled value=''>{mainValue}</option>
                    {children}
                </select>
            </div>
        </>
    );
}

export default DefaultSelect;