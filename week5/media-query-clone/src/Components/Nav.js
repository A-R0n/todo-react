import React, { Component } from 'react';
import './Nav.css';


class Nav extends Component {
    render() {
    return (<nav>
            <div className="container">
                <a id="title">Start Bootstrap</a>
                <button className='btn'>MENU &#x2630;
                </button>
                <div>
                    <span id="services">SERVICES</span>
                    <span id="portfolio">PORTFOLIO</span>
                    <span id="about">ABOUT</span>
                    <span id="team">TEAM</span>
                    <span id="contact">CONTACT</span>
                </div>
            </div>
        </nav>
);
}
}

export default Nav;