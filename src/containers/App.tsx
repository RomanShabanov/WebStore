import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Loadable from 'react-loadable';

import { Header, Footer } from '../components';

const AsynHome = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ './Home'),
  loading: () => <div>Loading...</div>
});

const AsynContacts = Loadable({
  loader: () => import(/* webpackChunkName: "Contacts" */ './Contacts'),
  loading: () => <div>Loading...</div>
});

const AsynBooking = Loadable({
  loader: () => import(/* webpackChunkName: "Booking" */ './Booking'),
  loading: () => <div>Loading...</div>
});

const AsynCheckout = Loadable({
  loader: () => import(/* webpackChunkName: "Checkout" */ './Checkout'),
  loading: () => <div>Loading...</div>
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/' exact component={AsynHome} />
            <Route path='/booking' exact component={AsynBooking} />
            <Route path='/contacts' exact component={AsynContacts} />
            <Route path='/checkout' component={AsynCheckout} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
