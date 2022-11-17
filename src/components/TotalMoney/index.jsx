import React from 'react';
import './index.css';

const TotalMoney = ({ data }) => {
    return (
        <div className='total-money'>
            <div className="desc-value">
                <h4>Valor total:</h4>
                <span>O valor se refere ao saldo</span>
            </div>
            <span>{data.reduce((acc, curr) => acc + curr.value, 0)
            .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
        </div>
    );
}

export default TotalMoney;