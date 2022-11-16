import React, { useState } from 'react';
import './App.css'
import Dashboard from './components/Dashboard';
import Home from './components/Home';

function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      {isLogged ?
        <Home setIsLogged={setIsLogged} />
        :
        <Dashboard setIsLogged={setIsLogged} />
      }
    </>
  );
}

export default App
