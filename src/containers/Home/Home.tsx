import React, { Component } from 'react';
import './Home.scss';

import { ProductPreview, LazyImage } from '../../components';

import imageHomeHero from '../../assets/images/Test_slide.png';

class Home extends Component {
    render() {
        return <div className="Home">

            <div className="Home__Hero">
                <div className="wrapper">
                    <LazyImage src={imageHomeHero} />
                </div>
            </div>

            <div className="wrapper">
                <aside></aside>
                <section>
                    {[0, 1, 2, 3, 4, 5, 6].map(id => {
                        const product = {
                            id,
                            cover: 'https://sushipanda.ee/523-home_default/miso-supp-150-ml.jpg',
                            price: 4.5
                        };
                        return <ProductPreview key={id} product={product} />
                    })}
                </section>
            </div>
        </div>
    }
}

export default Home;