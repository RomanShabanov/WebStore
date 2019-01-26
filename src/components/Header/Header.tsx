import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { observer } from "mobx-react";

import './Header.scss';

@observer(['basket', 'auth'])
class Header extends Component<any, any> {

    private URLS = [
        {
            label: "Home",
            url: "/",
        }, {
            label: "Menu",
            url: "/menu",
        }, {
            label: "#Vegan",
            url: "/vegan",
        }, {
            label: "About",
            url: "/about",
        }, {
            label: "Blog",
            url: "/blog",
        }, {
            label: "Contacts",
            url: "/contacts",
        },
    ]

    constructor(props: any) {
        super(props);
    }

    render() {

        return <header className="Header">
            <div className="wrapper">
                <div className="menu">
                    <div className="menu__links">
                        {this.URLS.map(link => <Link className="link" key={link.label} to={link.url}>{link.label}</Link>)}
                    </div>
                </div>
                <div className="Basket">Items in the basket: {this.props.basket.cart.total}</div>
                <div className="Header__Account">
                    {!this.props.auth.isLoggedIn && <Link to={`/login`}>Login</Link>}
                    <p>User: {this.props.auth.isLoggedIn ? 'online' : 'offline'}</p>
                </div>
            </div>
        </header>
    }
}

export default Header;