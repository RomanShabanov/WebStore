import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { observer, inject } from "mobx-react";

import './Header.scss';

@inject('basket')
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

    render() {

        return <header className="Header">
            <div className="wrapper">
                <div className="menu">
                    <div className="menu__links">
                        {this.URLS.map(link => <Link className="link" key={link.label} to={link.url}>{link.label}</Link>)}
                    </div>
                </div>
                <div className="Basket">{this.props.basket.cart.total}</div>
            </div>
        </header>
    }
}

export default Header;