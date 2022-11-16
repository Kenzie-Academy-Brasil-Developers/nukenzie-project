import React from 'react';
import Header from '../Header';

const Dashboard = ({ setIsLogged }) => {
    return (
        <>
            <Header target={setIsLogged} />
        </>
    );
}

export default Dashboard;