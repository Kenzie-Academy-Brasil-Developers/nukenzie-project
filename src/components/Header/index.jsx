import React from 'react';
import GreyLogo from '../GreyLogo';
import SecondaryButton from '../SecondaryButton';
import '../../styles/buttons.css';
import './index.css';

const Header = ({ target }) => {

    const backToHome = () => target(true);

    return (
        <>
            <header>
                <div className='menu container'>
                    <GreyLogo />
                    <nav>
                        <ul>
                            <li>
                                <SecondaryButton value='Inicio' callback={backToHome} />
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;