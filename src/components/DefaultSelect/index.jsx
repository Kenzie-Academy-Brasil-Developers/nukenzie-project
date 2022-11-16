import React from 'react';

const DefaultSelect = ({ mainValue, name, children }) => {
    return (
        <>
            <select name={name} id={name} >
                <option selected disabled>{mainValue}</option>
                {children}
            </select>
        </>
    );
}

export default DefaultSelect;