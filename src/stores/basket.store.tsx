import { observable } from "mobx";

import { IProduct } from '../interfaces';

import { storage } from '../utils';

class BasketStore {

    @observable cart: any = {
        items: [],
        total: 0,
    };

    constructor() {

        const cart = storage.get('cart');

        if (cart) {
            this.cart = cart;
        }
    }

    add(product: IProduct) {

        const item = this.cart.items.find((item: any) => item.id === product.id);

        if (!item) {
            product.qty = 1;
            this.cart.items.push(product);
        } else {
            item.qty += 1;
        }

        this.cart.total += 1;
        this.syncWithStorage();
    }

    remove(product: IProduct) {

        const item = this.cart.items.find((item: any) => item.id === product.id);

        if (item) {
            this.cart.total -= 1;

            if (item.qty <= 1) {
                this.cart.items.splice(this.cart.items.indexOf(item), 1);
            } else {
                item.qty -= 1;
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