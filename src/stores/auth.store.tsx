import { observable } from "mobx";

import { storage } from '../utils';

class AuthStore {

    @observable isLoggedIn: boolean = true;

    constructor() {

    }

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }

    signup() {

    }

    forgot() {

    }
}

const auth = new AuthStore();

export default auth;