import React from 'react';
import NoCard from '../../assets/NoCard.svg';
import './index.css';

const EmptyBox = () => {
    return (
        <div className='empty-box'>
            <h3>Você ainda não possui nenhum lançamento</h3>
            <img draggable='false' src={NoCard} />
        </div>
    );
}

export default EmptyBox;