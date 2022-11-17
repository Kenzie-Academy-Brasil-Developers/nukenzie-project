import React from 'react';
import TrashButton from '../TrashButton';
import './index.css';

const Card = ({ data }) => {
    return (
        <>
            <ul className='list-card'>
                {data.map(({ description, type, value }) => {
                    return (
                        <li className={type.toLowerCase() == 'entrada' ? 'entry-type' : false}>
                            <div className="left-card">
                                <h4>{description}</h4>
                                <span>{type}</span>
                            </div>
                            <div className="card-details">
                                <span>{Math.abs(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                                <TrashButton />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Card;