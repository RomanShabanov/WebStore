import React, { Component } from 'react';
import './Home.scss';

import { ProductPreview, LazyImage } from '../../components';

import imageHomeHero from '../../assets/images/Test_slide.png';
import ProductsJSON from '../../assets/json/products.json';

class Home extends Component {
    render() {
        return <div className="Home">

            <div className="Home__Hero">
                <div className="wrapper">
                    <LazyImage src={imageHomeHero} />
                </div>
            </div>

            <div className="Home__Sale">
                <div className="wrapper">
                    <section>
                        {ProductsJSON.map(category => {
                            return (<div className="Menu__Category" key={category.id}>
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

            <div className="Home__RecentBlog">
                <div className="wrapper">
                    <h2>Blog</h2>
                </div>
            </div>
        </div>
    }
}

export default Home;