import React from 'react';
import TrashButton from '../TrashButton';
import '../../styles/animations.css'
import './index.css';

const Card = ({ data, setHandleFilter, setListTransactions, listTransactions }) => {

    const removeCard = (e) => {
        const elemIndex = listTransactions.findIndex((elem) => elem.id === parseInt(e.target.id));
        const newData = [...listTransactions];
        newData.splice(elemIndex, 1);
        setListTransactions(newData);
        setHandleFilter([]);
    }

    return (
        <>
            <ul className='list-card'>
                {data.map(({ description, type, value, id }) => {
                    return (
                        <li key={id} className={type.toLowerCase() == 'entrada' ? 'card entry-type' : 'card'}>
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