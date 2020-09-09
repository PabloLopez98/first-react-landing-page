import React from 'react';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAirFreshener, faChessKnight, faBars } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    return (
        <div className="navbar-container">
            <div className="brand-container">
                <div>
                    <FontAwesomeIcon icon={faChessKnight} className="Icon" />
                    <span>ChatIQ</span>
                </div>
            </div>
            <div className="menu-container">
                <ul>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
            </div>
            <div className="buttons-container">
                <div>
                    <a>Sign In</a>
                    <div>
                        <span>Talk to us</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;