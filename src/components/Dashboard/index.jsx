import Card from '../Card';
import EmptyBox from '../EmptyBox';
import Form from '../Form';
import Header from '../Header';
import List from '../List';
import TotalMoney from '../TotalMoney';
import './index.css';

const Dashboard = ({ setIsLogged, listTransactions, setListTransactions }) => {

    return (
        <>
            <Header target={setIsLogged} />
            <main className='main-wrapper container'>
                <section className='left-position'>
                    <Form
                        data={listTransactions}
                        callback={setListTransactions}
                    />
                    {listTransactions.length ? <TotalMoney data={listTransactions} /> : false}
                </section>
                <section className='right-position'>
                    <List
                        data={listTransactions}
                        callback={setListTransactions}
                    />
                    {!listTransactions.length ?
                        <EmptyBox />
                        :
                        <Card
                            data={listTransactions}
                            callback={setListTransactions}
                        />
                    }
                </section>
            </main>
        </>
    );
}

export default Dashboard;