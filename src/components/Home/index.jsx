import React from 'react';
import DefaultButton from '../DefaultButton';
import MainImage from '../HomeImage';
import WhiteLogo from '../WhiteLogo';
import "./index.css"

const Home = () => {
    return (
        <>
            <div className='background'>
                <div className='container'>

                    <section className="left">
                        <WhiteLogo />
                        <h2>Centralize o controle das suas finanças</h2>
                        <span>de forma rápida e segura</span>
                        <DefaultButton value='Iniciar' />
                    </section>
                    <section className="right">
                        <MainImage />
                    </section>

                </div>
            </div>
        </>
    );
}

export default Home;