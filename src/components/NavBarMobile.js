import React from 'react';
import './NavBarMobile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAirFreshener, faChessKnight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function NavBarMobile() {

    const [isBurger, setIsBurger] = useState(true);

    return (
        <div className="navbar-container">
            <div className="brand-container">
                <div>
                    <FontAwesomeIcon icon={faChessKnight} className="Icon" />
                    <span>ChatIQ</span>
                </div>
            </div>
            <div className="burger-container">
                <div>
                    <FontAwesomeIcon icon={isBurger ? faBars : faTimes} className="Icon" onClick={() => setIsBurger(!isBurger)} />
                </div>
            </div>
        </div>
    );
}

export default NavBarMobile;