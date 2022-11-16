import React from 'react';
import '../../styles/buttons.css';

const TrashButton = ({type = 'button', children}) => {
    return ( <button type={type} className='trash-button' onClick={children}></button> );
}
 
export default TrashButton;