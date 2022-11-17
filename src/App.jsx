import React, { useState } from 'react';
import './App.css'
import Dashboard from './components/Dashboard';
import Home from './components/Home';

function App() {

  const [isLogged, setIsLogged] = useState(true);

  const [listTransactions, setListTransactions] = useState([]);

  return (
    <>
      {isLogged ?
        <Home setIsLogged={setIsLogged} />
        :
        <Dashboard setIsLogged={setIsLogged} listTransactions={listTransactions} setListTransactions={setListTransactions} />
      }
    </>
  );
}

export default App
