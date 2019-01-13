import React, { Component } from 'react';
import logo from '../logo.svg';

import Home from './Home';
import Contacts from './Contacts';
import Booking from './Booking';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
