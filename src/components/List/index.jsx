import React from 'react';
import SecondaryButton from '../SecondaryButton';
import './index.css';

const List = ({ data, callback }) => {

    const activeFilter = (e) => {
        e.target.id !== "Todos" &&
            callback(data.filter((elem) => elem.type == e.target.id));
    }

    return (
        <div className="list">
            <h4>Resumo financeiro</h4>
            <ul>
                <li>
                    <SecondaryButton value='Todos' callback={activeFilter} id='Todos' />
                </li>
                <li>
                    <SecondaryButton value='Entradas' callback={activeFilter} id='Entrada' />
                </li>
                <li>
                    <SecondaryButton value='Despesas' callback={activeFilter} id='Saída' />
                </li>
            </ul>
        </div>
    );
}

export default List;