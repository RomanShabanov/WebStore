import React, { Component } from 'react';
import './Home.scss';

import { ProductPreview, LazyImage } from '../../components';

import imageHomeHero from '../../assets/images/Test_slide.png';
import ProductsJSON from '../../assets/json/products.json';

class Home extends Component {
    render() {
        console.log(ProductsJSON);
        return <div className="Home">

            <div className="Home__Hero">
                <div className="wrapper">
                    <LazyImage src={imageHomeHero} />
                </div>
            </div>

            <div className="wrapper">
                <aside></aside>
                <section>
                    {ProductsJSON.map(category => {
                        return (<div className="Menu__Category">
                            <h2 className="title">{category.title}</h2>
                            <div className="products">
                                {category.products.map(product => {
                                    return <ProductPreview key={product.id} product={product} />
                                })}
                            </div>
                        </div>)
                    })}
                </section>
            </div>
        </div>
    }
}

export default Home;