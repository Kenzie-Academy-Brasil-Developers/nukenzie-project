import React from 'react';
import TrashButton from '../TrashButton';
import './index.css';

const Card = ({ data, callback }) => {

    const removeCard = (e) => {
        const elemIndex = data.findIndex((elem) => elem.id === parseInt(e.target.id));
        const newData = [...data];
        newData.splice(elemIndex, 1);
        callback(newData);
    }

    return (
        <>
            <ul className='list-card'>
                {data.map(({ description, type, value, id }) => {
                    return (
                        <li key={id} className={type.toLowerCase() == 'entrada' ? 'entry-type' : false}>
                            <div className="left-card">
                                <h4>{description}</h4>
                                <span>{type}</span>
                            </div>
                            <div className="card-details">
                                <span>{Math.abs(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                                <TrashButton callback={removeCard} id={id} />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Card;