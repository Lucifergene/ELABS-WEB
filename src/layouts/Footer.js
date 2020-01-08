import React from 'react';


const Footer = () => {
    return (
        <div>
            {/* Footer */}
      <footer className="page-footer font-small mdb-color pt-4 bg-dark">
        {/* Footer Links */}
        <div className="container text-center text-md-left">
          {/* Footer links */}
          <div className="row text-center text-md-left mt-3 pb-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase text-white mb-4 font-weight-bold ">E-Labs</h6>
              
            </div>
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            
            <hr className="w-100 clearfix d-md-none" />
            
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 text-white font-weight-bold">Contact</h6>
              <p class="text-white">
                <i className="fas fa-home mr-3 text-white" /> New York, NY 10012, US</p>
              <p class="text-white">
                <i className="fas fa-envelope mr-3 text-white" /> info@gmail.com</p>
              <p class="text-white">
                <i className="fas fa-phone mr-3 text-white" /> + 01 234 567 88</p>
              <p class="text-white">
                <i className="fas fa-print mr-3 text-white" /> + 01 234 567 89</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Footer links */}
          <hr />
          {/* Grid row */}
          <div className="row d-flex align-items-center">
            {/* Grid column */}
            <div className="col-md-7 col-lg-8">
              {/*Copyright*/}
              <p className="text-center text-white text-md-left">© 2020 Copyright:
                  <strong> E-Labs</strong>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-5 col-lg-4 ml-lg-0">
              {/* Social buttons */}
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i class="fab fa-facebook-f text-white"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-twitter text-white" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i class="fab fa-instagram text-white"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-linkedin-in text-white" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Links */}
      </footer>
      {/* Footer */}
    </div>
    )
}

export default Footer;