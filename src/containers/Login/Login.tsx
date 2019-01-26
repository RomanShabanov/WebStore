import React, { Component } from 'react';

import { observer, inject } from "mobx-react";

import { Redirect } from 'react-router-dom';

import './Login.scss';

@inject('auth')
@observer
class Login extends Component<any, any>{
    constructor(props: any) {
        super(props);

        this.login = this.login.bind(this);
    }

    login(e: any) {
        e.preventDefault();
        this.props.auth.login('bit.size.dev@gmail.com', 'RandomPassword');
    }

    render() {

        if(this.props.auth.isLoggedIn){
            return <Redirect to={`/`}/>
        }

        return <div className="Login">
            <div className="wrapper">
                <form onSubmit={this.login}>
                    <label>
                        <span>Email</span>
                        <input name="email" type="text" />
                    </label>
                    <label>
                        <span>Password</span>
                        <input name="password" type="password" />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    }
}

export default Login;