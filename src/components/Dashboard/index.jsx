import React from 'react';
import Form from '../Form';
import Header from '../Header';

const Dashboard = ({ setIsLogged }) => {
    return (
        <>
            <Header target={setIsLogged} />
            <Form/>
        </>
    );
}

export default Dashboard;