import React from 'react';
import logo from './theimg.png';
import './Content.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAirFreshener } from '@fortawesome/free-solid-svg-icons';

function Content() {
    return (
        <div className="content-container-wrapper">
            <div className="content-container">
                <div className="big-text-container">
                    <span>Connect.<br /> Grow.<br /> Inspire.</span>
                </div>
                <div className="small-text-container">
                    <span>Engage your customers and communities<br /> with a full-feature chat integration</span>
                </div>
                <div className="buttons-container">
                    <div>
                        <div>
                            <span>Talk to us</span>
                        </div>
                        <div>
                            <span>Get Demo</span>
                        </div>
                    </div>
                </div>
                <div className="last-button-container">
                    <div>
                        <span>See Offers</span>
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img src={logo} />
            </div>
        </div>
    );
}

export default Content;