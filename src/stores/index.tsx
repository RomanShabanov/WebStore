import Products from './products.store';

class Store {
    products: any;

    constructor() {
        this.products = new Products(this);
    }
}

export default Store;