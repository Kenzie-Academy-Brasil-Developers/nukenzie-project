import React from 'react';
import '../../styles/buttons.css';

const TrashButton = ({type = 'button', value, children}) => {
    return ( <button type={type} className='trash-button' onClick={children}>{value}</button> );
}
 
export default TrashButton;