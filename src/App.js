import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';

import './App.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import JoinUs from './components/JoinUs';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' />
        <Route path='/Join' component={JoinUs} />
        {/* <Route path='/Contact' component={ContactUs} /> */}
      </Switch>
      <br/>
      <br/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;