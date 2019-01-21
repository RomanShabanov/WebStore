import { observable } from "mobx";

import ProductsJSON from '../assets/json/products.json';

class ProductsStore {

    @observable list: any = [];

    constructor() {
        this.loadProducts();
    }

    loadProducts() {
        setTimeout(() => {
            this.list = ProductsJSON;
        }, 5000);
    }
}

export default ProductsStore;