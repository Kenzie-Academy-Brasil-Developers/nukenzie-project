import React from 'react';
import '../../styles/inputs.css';

const DefaultInput = ({ type, placeHolder, value, label, helperText }) => {
    return (
        <>
            <div className="defaultInput">
                {label && <label htmlFor={value}>{label}</label>}
                <input type={type} placeholder={placeHolder} name={value} id={value} />
                {helperText && <span>{helperText}</span>}
            </div>
        </>
    );
}

export default DefaultInput;