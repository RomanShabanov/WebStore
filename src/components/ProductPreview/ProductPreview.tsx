import React, { Component } from 'react';

import { observer } from "mobx-react";

import './ProductPreview.scss';

import { IProduct } from '../../interfaces';

@observer(['basket'])
class ProductPreview extends Component<any, any> {
    constructor(props: IProduct) {
        super(props);

        this.addToBasket = this.addToBasket.bind(this);
    }

    addToBasket(){
        this.props.basket.add(this.props.product);
    }

    render() {
        const { product } = this.props;
        return <div className="ProductPreview">

            <div className="cover" style={{ backgroundImage: `url(${product.cover})` }}></div>
            <button onClick={this.addToBasket}>Add To Basket</button>
        </div >
    }
}

export default ProductPreview;