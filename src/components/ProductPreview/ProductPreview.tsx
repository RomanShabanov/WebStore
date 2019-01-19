import React, { Component } from 'react';

import './ProductPreview.scss';

import { IProduct } from '../../interfaces';

class ProductPreview extends Component<any, any> {
    constructor(props: IProduct) {
        super(props);
    }

    render() {
        const { product } = this.props;
        return <div className="ProductPreview">
            <div className="cover" style={{backgroundImage: `url(${product.cover})`}}></div>
        </div >
    }
}

export default ProductPreview;