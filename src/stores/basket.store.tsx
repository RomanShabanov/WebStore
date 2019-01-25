import { observable } from "mobx";

import { IProduct } from '../interfaces';

import { storage } from '../utils';

class BasketStore {

    @observable cart: any = {
        items: {},
        total: 0,
    };

    constructor() {

        const cart = storage.get('cart');

        if (cart) {
            this.cart = cart;
        }
    }

    add(product: IProduct) {
        if (!this.cart.items[product.id]) {
            product.qty = 1;
            this.cart.items[product.id] = product;
        } else {
            this.cart.items[product.id].qty += 1;
        }

        this.cart.total += 1;
        this.syncWithStorage();
    }

    remove(product: IProduct) {

        if (this.cart.items[product.id]) {
            this.cart.total -= 1;
            this.cart.items[product.id].qty -= 1;

            if (this.cart.items[product.id].qty === 0) {
                delete this.cart.items[product.id];
            }
        }
        this.syncWithStorage();

    }

    clear() {
        this.cart.items = {};
        this.cart.total = 0;
        this.syncWithStorage();
    }

    syncWithStorage() {
        storage.set('cart', this.cart);
    }
}

const basket = new BasketStore();

export default basket;