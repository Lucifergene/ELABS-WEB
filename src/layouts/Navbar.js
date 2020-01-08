import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
       return (
          <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div class="container">
            <a href="/" class="navbar-left"><img src="#"/></a>
              <a href="/" class="navbar-brand d-flex align-items-center"> <strong>E-Labs</strong></a>
              <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
              <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">                  
                  <li class="nav-item active"><a href="/join" class="nav-link"> Join Us </a></li>
                </ul>
              </div>
            </div>
          </nav>

  )
}

export default Navbar;