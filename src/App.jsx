import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {

  if (!localStorage.userData) localStorage.setItem('userData', '[]'); 

  const [isLogged, setIsLogged] = useState(true);
  const [listTransactions, setListTransactions] = useState(JSON.parse(localStorage.userData));

  return (
    <>
      {isLogged ?
        <Home setIsLogged={setIsLogged} />
        :
        <Dashboard setIsLogged={setIsLogged} listTransactions={listTransactions} setListTransactions={setListTransactions} />
      }

      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App
