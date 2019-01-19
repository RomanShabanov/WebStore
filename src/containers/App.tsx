import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Loadable from 'react-loadable';

import { Header, Footer } from '../components';

import Store from '../stores';

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

const AsynForgot = Loadable({
  loader: () => import(/*webpackCunkName: "Forgot" */ './Forgot'),
  loading: () => <div>Loading...</div>
});

const AsynInstagramWall = Loadable({
  loader: () => import(/*webpackCunkName: "InstagramWall" */ './InstagramWall'),
  loading: () => <div>Loading...</div>
});

const AsynLogin = Loadable({
  loader: () => import(/*webpackCunkName: "Login" */ './Login'),
  loading: () => <div>Loading...</div>
});

const AsynOffers = Loadable({
  loader: () => import(/*webpackCunkName: "Offers" */ './Offers'),
  loading: () => <div>Loading...</div>
});

const AsynOrder = Loadable({
  loader: () => import(/*webpackCunkName: "Order" */ './Order'),
  loading: () => <div>Loading...</div>
});

const AsynOrdersHistory = Loadable({
  loader: () => import(/*webpackCunkName: "OrdersHistory" */ './OrdersHistory'),
  loading: () => <div>Loading...</div>
});

const AsynProfile = Loadable({
  loader: () => import(/*webpackCunkName: "Profile" */ './Profile'),
  loading: () => <div>Loading...</div>
});

const AsynSignUp = Loadable({
  loader: () => import(/*webpackCunkName: "SignUp" */ './SignUp'),
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
            <Route path='/forgot' component={AsynForgot} />
            <Route path='/instagramwall' component={AsynInstagramWall} />
            <Route path='/login' component={AsynLogin} />
            <Route path='/offers' component={AsynOffers} />
            <Route path='/order' component={AsynOrder} />
            <Route path='/ordershistory' component={AsynOrdersHistory} />
            <Route path='/profile' component={AsynProfile} />
            <Route path='/signup' component={AsynSignUp} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
