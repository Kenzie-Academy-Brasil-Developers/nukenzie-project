import React from 'react';

const DefaultSelect = ({ mainValue, name, children }) => {
    return (
        <>
            <select name={name} id={name} required>
                <option selected disabled value>{mainValue}</option>
                {children}
            </select>
        </>
    );
}

export default DefaultSelect;