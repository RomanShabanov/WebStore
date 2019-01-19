import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends Component {
    private URLS = [
        {
            label: "Menu",
            url: "/",
        }, {
            label: "#Vegan",
            url: "/vegan",
        }, {
            label: "About",
            url: "/about",
        }, {
            label: "Contacts",
            url: "/contacts",
        },
    ]

    render() {
        return <header className="Header">
            <div className="wrapper">
                <div className="menu">
                    <div className="menu__links">
                        <ul className="menu__links__list">
                            {this.URLS.map(link => <Link key={link.label} to={link.url}>{link.label}</Link>)}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    }
}

export default Header;