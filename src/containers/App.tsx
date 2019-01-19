import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Loadable from 'react-loadable';

import { Header, Footer } from '../components';

import Store from '../stores';

const AsyncHome = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ './Home'),
  loading: () => <div>Loading...</div>
});

const AsyncContacts = Loadable({
  loader: () => import(/* webpackChunkName: "Contacts" */ './Contacts'),
  loading: () => <div>Loading...</div>
});

const AsyncBooking = Loadable({
  loader: () => import(/* webpackChunkName: "Booking" */ './Booking'),
  loading: () => <div>Loading...</div>
});

const AsyncCheckout = Loadable({
  loader: () => import(/* webpackChunkName: "Checkout" */ './Checkout'),
  loading: () => <div>Loading...</div>
});

const AsyncForgot = Loadable({
  loader: () => import(/*webpackCunkName: "Forgot" */ './Forgot'),
  loading: () => <div>Loading...</div>
});

const AsyncInstagramWall = Loadable({
  loader: () => import(/*webpackCunkName: "InstagramWall" */ './InstagramWall'),
  loading: () => <div>Loading...</div>
});

const AsyncLogin = Loadable({
  loader: () => import(/*webpackCunkName: "Login" */ './Login'),
  loading: () => <div>Loading...</div>
});

const AsyncOffers = Loadable({
  loader: () => import(/*webpackCunkName: "Offers" */ './Offers'),
  loading: () => <div>Loading...</div>
});

const AsyncOrder = Loadable({
  loader: () => import(/*webpackCunkName: "Order" */ './Order'),
  loading: () => <div>Loading...</div>
});

const AsyncOrdersHistory = Loadable({
  loader: () => import(/*webpackCunkName: "OrdersHistory" */ './OrdersHistory'),
  loading: () => <div>Loading...</div>
});

const AsyncProfile = Loadable({
  loader: () => import(/*webpackCunkName: "Profile" */ './Profile'),
  loading: () => <div>Loading...</div>
});

const AsyncSignUp = Loadable({
  loader: () => import(/*webpackCunkName: "SignUp" */ './SignUp'),
  loading: () => <div>Loading...</div>
});

const AsyncAbout = Loadable({
  loader: () => import(/*webpackCunkName: "About" */ './About'),
  loading: () => <div>Loading...</div>
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="Content">
            <Switch>
              <Route path='/' exact component={AsyncHome} />
              <Route path='/booking' exact component={AsyncBooking} />
              <Route path='/contacts' exact component={AsyncContacts} />
              <Route path='/checkout' component={AsyncCheckout} />
              <Route path='/forgot' component={AsyncForgot} />
              <Route path='/instagramwall' component={AsyncInstagramWall} />
              <Route path='/login' component={AsyncLogin} />
              <Route path='/offers' component={AsyncOffers} />
              <Route path='/order' component={AsyncOrder} />
              <Route path='/ordershistory' component={AsyncOrdersHistory} />
              <Route path='/profile' component={AsyncProfile} />
              <Route path='/signup' component={AsyncSignUp} />
              <Route path='/about' component={AsyncAbout} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
