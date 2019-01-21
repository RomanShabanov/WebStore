import React, { Component } from 'react';
import './Home.scss';

import { observer, inject } from "mobx-react";

import { ProductPreview, LazyImage } from '../../components';

import imageHomeHero from '../../assets/images/Test_slide.png';

@inject('products')
@observer
class Home extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

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
                        {!this.props.products.list.length && <div>Loading...</div>}
                        {this.props.products.list.map((category: any) => {
                            return (<div className="Menu__Category" key={category.id}>
                                <h2 className="title">{category.title}</h2>
                                <div className="products">
                                    {category.products.map((product: any) => {
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