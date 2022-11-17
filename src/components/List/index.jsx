import React from 'react';
import SecondaryButton from '../SecondaryButton';
import './index.css';

const List = ({ data, callback, activeButton }) => {

    const activeFilter = (e) => {

        const filteredData = data.filter((elem) => elem.type == e.target.id);
        
        e.target.id === "Todos"
            ? callback([])
            : e.target.id === "Entrada" && filteredData.length
            ? callback(filteredData)
            : e.target.id === "Saída" && filteredData.length
            ? callback(filteredData) 
            : callback([]);
    }

    return (
        <div className="list">
            <h4>Resumo financeiro</h4>
            <ul>
                <li>
                    <SecondaryButton value='Todos' callback={activeFilter} id='Todos' active={activeButton === 'Todos' && true} />
                </li>
                <li>
                    <SecondaryButton value='Entradas' callback={activeFilter} id='Entrada' active={activeButton === 'Entrada' && true} />
                </li>
                <li>
                    <SecondaryButton value='Despesas' callback={activeFilter} id='Saída' active={activeButton === 'Saída' && true} />
                </li>
            </ul>
        </div>
    );
}

export default List;