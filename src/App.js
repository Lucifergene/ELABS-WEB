import React, { Component } from 'react';
import {BrowserRouter , Switch , Route ,Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import JoinUs from './components/JoinUs';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={JoinUs} />
          {/* <Route path='/Join' component={JoinUs} /> */}
          {/* <Route path='/Contact' component={ContactUs} /> */}
        </Switch>
        <br/>
        <br/>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;