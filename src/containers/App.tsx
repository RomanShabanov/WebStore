import React, { Component } from 'react';

import { Header, Footer } from '../components';

import Home from './Home';
import Contacts from './Contacts';
import Booking from './Booking';
import Checkout from './Checkout';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
