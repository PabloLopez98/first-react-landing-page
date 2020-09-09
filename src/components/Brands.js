import React from 'react';
import './Brands.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAirFreshener, faAddressBook, faAmericanSignLanguageInterpreting, faAd } from '@fortawesome/free-solid-svg-icons';

function Brands() {
    return (
        <div className="brands-container">
            <ul>
                <li><FontAwesomeIcon icon={faAd} className="Icon" /> reddit</li>
                <li><FontAwesomeIcon icon={faCoffee} className="Icon" /> Discord</li>
                <li><FontAwesomeIcon icon={faAddressBook} className="Icon" /> heatbadge</li>
                <li><FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} className="Icon" /> Outer Dimensions</li>
            </ul>
        </div>
    );
}

export default Brands;