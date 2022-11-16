import React from 'react';
import GreyLogo from '../GreyLogo';
import SecondaryButton from '../SecondaryButton';
import '../../styles/buttons.css';
import './index.css';

const Header = ({ target }) => {
    return (
        <>
            <header>
                <div className='menu container'>
                    <GreyLogo />
                    <nav>
                        <ul>
                            <li>
                                <SecondaryButton value='Inicio'>
                                    {() => target(true)}
                                </SecondaryButton>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;