import React, { Component } from 'react';
import Slider from "react-slick";

import { ProductPreview } from '../../components';

class Home extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return <div className="Home">
            <div className="wrapper">
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
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