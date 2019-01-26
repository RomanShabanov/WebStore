import { observable } from "mobx";

import { storage } from '../utils';

class AuthStore {

    @observable isLoggedIn: boolean = false;
    @observable user: object | null = null;

    constructor() {
        const user = storage.get('user');

        if (user){
            this.user = user;
            this.isLoggedIn = true;
        }
    }

    login(email: string, password: string) {

        const user = {
            email,
            name: 'Roman Shabanov',
            tel: '+372 53 49 0 135',
            address: 'Kreutzwaldi 3-8, Rakvere',
        }

        this.isLoggedIn = true;
        this.user = user;
        storage.set('user', user);
    }

    logout() {
        this.isLoggedIn = false;
        this.user = null;
        storage.delete('user');
    }

    signup() {

    }

    forgot() {

    }
}

const auth = new AuthStore();

export default auth;