import React from 'react';
import SecondaryButton from '../SecondaryButton';
import './index.css';

const List = () => {
    return ( 
        <div className="list">
            <h4>Resumo financeiro</h4>
            <ul>
                <li>
                    <SecondaryButton value='Todos'/>
                </li>
                <li>
                    <SecondaryButton value='Entradas'/>
                </li>
                <li>
                    <SecondaryButton value='Despesas'/>
                </li>
            </ul>
        </div>
     );
}
 
export default List;