import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { observer, inject } from "mobx-react";

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

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
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
                    <p>User: {this.props.auth.isLoggedIn ? 'online' : 'offline' }</p>
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.logout}>Logout</button>
                </div>
            </div>
        </header>
    }
}

export default Header;