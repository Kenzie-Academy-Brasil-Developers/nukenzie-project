import React from 'react';
import GreyLogo from '../GreyLogo';
import "../../styles/buttons.css";
import "./index.css";

const Header = ({ target }) => {
    return (
        <>
            <header>
                <div className="menu container">
                    <GreyLogo />
                    <nav>
                        <ul>
                            <li>
                                <button className='secondary-button' onClick={() => target(true)}>Inicio</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;