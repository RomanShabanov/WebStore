import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends Component {
    private URLS = [
        {
            label: "Menu",
            url: "/",
        }, {
            label: "Table Booking",
            url: "/booking",
        }, {
            label: "Contacts",
            url: "/contacts",
        },
    ]

    render() {
        return <header className="Header">
            <div className="menu">
                <div className="menu__links">
                    <ul className="menu__links__list">
                        {this.URLS.map(link => <Link to={link.url}>{link.label}</Link>)}
                    </ul>
                </div>
            </div>
        </header>
    }
}

export default Header;