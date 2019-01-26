import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { observer, inject } from "mobx-react";

import './Header.scss';

@inject('basket', 'auth')
@observer
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
        this.logout = this.logout.bind(this);
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
                    {!this.props.auth.isLoggedIn && <Link to={`/login`}>Login</Link>}
                    <p>User: {this.props.auth.user && <strong>{this.props.auth.user.email}</strong>} {this.props.auth.user ? 'online' : 'offline'}</p>

                    {this.props.auth.user && <button onClick={this.logout}>Logout</button>}
                </div>
            </div>
        </header>
    }
}

export default Header;