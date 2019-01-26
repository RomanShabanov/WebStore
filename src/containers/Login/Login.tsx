import React, { Component } from 'react';

import { observer, inject } from "mobx-react";

import { Redirect } from 'react-router-dom';

import { validateEmail } from "../../utils";

import './Login.scss';

@inject('auth')
@observer
class Login extends Component<any, any>{
    constructor(props: any) {
        super(props);

        this.login = this.login.bind(this);
        this.inputChange = this.inputChange.bind(this);

        this.state = {
            email: '',
            password: '',
            error: null,
        }
    }

    login(e: any) {
        e.preventDefault();

        if (!this.state.email) {
            this.setState({
                error: "E-mail is required.",
            });
            return false;
        }

        if (!validateEmail(this.state.email)) {
            this.setState({
                error: "E-mail is incorrect.",
            });
            return false;
        }

        if (!this.state.password) {
            this.setState({
                error: "Password is required.",
            });
            return false;
        }

        this.props.auth.login(this.state.email, this.state.password);
    }

    inputChange(e: any) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {

        if (this.props.auth.isLoggedIn) {
            return <Redirect to={`/`} />
        }

        return <div className="Login">
            <div className="wrapper">
                <form onSubmit={this.login}>
                    <label>
                        <span>Email</span>
                        <input value={this.state.email} onChange={this.inputChange} name="email" type="text" />
                    </label>
                    <label>
                        <span>Password</span>
                        <input value={this.state.password} onChange={this.inputChange} name="password" type="password" />
                    </label>
                    <button type="submit">Login</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        </div>
    }
}

export default Login;