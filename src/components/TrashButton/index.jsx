import React from 'react';
import '../../styles/buttons.css';

const TrashButton = ({type = 'button', callback, id}) => {
    return ( <button type={type} className='trash-button' id={id} onClick={(e) => callback(e)}></button> );
}
 
export default TrashButton;