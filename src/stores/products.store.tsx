import { observable } from "mobx";

import ProductsJSON from '../assets/json/products.json';

class ProductsStore {

    @observable list: any = [];

    constructor() {
        this.loadProducts();
    }

    loadProducts() {
        this.list = ProductsJSON;
    }
}

export default ProductsStore;