import { decorate, observable, flow } from "mobx";

class Products {

    @observable products = [];
    @observable categories: {
        title: string,
        slug: string,
    }[] = [];

    store: any;

    constructor(store: any) {
        this.store = store;
        this.loadProducts();
    }

    loadProducts() {
        [{
            title: 'Nigiri',
            slug: "nigiri",
        }, {
            title: 'Alcohol',
            slug: 'alcohol',
        }].map(category => {
            this.categories.push(category);
        });
    }
}

export default Products;