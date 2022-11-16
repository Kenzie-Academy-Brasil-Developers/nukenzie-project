import React from 'react';
import MainImage from '../HomeImage';
import WhiteLogo from '../WhiteLogo';
import DefaultButton from '../DefaultButton';
import './index.css';

const Home = ({ setIsLogged }) => {

    return (
        <>
            <div className='background'>
                <div className='main-content container'>

                    <section className='left'>
                        <WhiteLogo />
                        <h2>Centralize o controle das suas finanças</h2>
                        <span>de forma rápida e segura</span>
                        <DefaultButton value='Iniciar'>
                            {() => setIsLogged(false)}
                        </DefaultButton>
                    </section>
                    <section className='right'>
                        <MainImage />
                    </section>

                </div>
            </div>
        </>
    );
}

export default Home;