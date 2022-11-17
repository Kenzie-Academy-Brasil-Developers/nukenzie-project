import { useState } from 'react';
import Card from '../Card';
import EmptyBox from '../EmptyBox';
import Form from '../Form';
import Header from '../Header';
import List from '../List';
import TotalMoney from '../TotalMoney';
import './index.css';

const Dashboard = ({ setIsLogged, listTransactions, setListTransactions }) => {

    const [handleFilter, setHandleFilter] = useState([]);
    
    return (
        <>
            <Header target={setIsLogged} />
            <main className='main-wrapper container'>
                <section className='left-position'>
                    <Form
                        data={listTransactions}
                        setListTransactions={setListTransactions}
                        setHandleFilter={setHandleFilter}
                    />
                    {listTransactions.length ? <TotalMoney data={listTransactions} /> : false}
                </section>
                <section className='right-position'>
                    <List
                        data={listTransactions}
                        callback={setHandleFilter}
                        activeButton={handleFilter.length ? handleFilter[0].type : 'Todos'}
                    />
                    {!listTransactions.length ?
                        <EmptyBox />
                        :
                        <Card
                            data={handleFilter.length ? handleFilter : listTransactions}
                            callback={setListTransactions}
                        />
                    }
                </section>
            </main>
        </>
    );
}

export default Dashboard;