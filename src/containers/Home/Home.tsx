import React, { Component } from 'react';

import { ProductPreview } from '../../components';

class Home extends Component {
    render() {
        return <div className="Home">
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