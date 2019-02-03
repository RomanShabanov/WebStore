import React, { Component } from 'react';
import './Basket.scss';

import { observer, inject } from "mobx-react";

@inject('basket', 'auth')
@observer
class Basket extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            basketVisible: false,
        }

        this.showBasket = this.showBasket.bind(this);
        this.hideBasket = this.hideBasket.bind(this);
        this.clearBasket = this.clearBasket.bind(this);
    }

    showBasket() {
        this.setState({
            basketVisible: true,
        });
    }

    hideBasket() {
        this.setState({
            basketVisible: false,
        });
    }

    clearBasket() {
        this.setState({
            basketVisible: false,
        });

        this.props.basket.clear();
    }

    render() {
        return <div className="Basket">
            <span onClick={this.showBasket}>Basket: {this.props.basket.cart.total}</span>
            {this.state.basketVisible && <div className="Basket__Sidemenu">
                <div><span onClick={this.hideBasket}>Close</span></div>
                <div>{/** TODO: Loop cart's items
                    Name - QTY - Total Price
                */
                    this.props.basket.cart.items.map((item: any) => {
                        return
                        <div>
                            <span>{item.title}</span>;
                        <span>{item.qty}</span>;
                        <span>{item.qty * item.price}</span>
                        </div>

                    })





                }
                </div>
                <div><span onClick={this.clearBasket}>Clear</span></div>
            </div>}
        </div>

    }
}

export default Basket;