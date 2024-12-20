import React from 'react';
import './part10.css';

function All10() {
  return (
    <>
      <div className="Outer">
        <div className="logoHead">
          <img src="/urbanclap/images/logo.png" alt="Logo" />
        </div>
        <div className="option">
          <div className="div1">
            <p className="heading">Company</p>
            <p className="options">About us</p>
            <p className="options">Terms & conditions</p>
            <p className="options">Privacy policy</p>
            <p className="options">Anti-discrimination policy</p>
            <p className="options">UC impact</p>
            <p className="options">Careers</p>
          </div>
          <div className="div1">
            <p className="heading">For customers</p>
            <p className="options">UC reviews</p>
            <p className="options">Categories near you</p>
            <p className="options">Blog</p>
            <p className="options">Contact us</p>
          </div>
          <div className="div1">
            <p className="heading">For partners</p>
            <p className="options">Register as a professional</p>
          </div>
          <div className="div1">
            <p className="heading">Social links</p>
            <div className="icons">
              <i className="fa-brands fa-twitter icons1"></i>
              <i className="fa-brands fa-facebook icons1"></i>
              <i className="fa-brands fa-instagram icons1"></i>
              <i className="fa-brands fa-linkedin icons1"></i>
            </div>
          </div>
        </div>
        <div className="foot">
          <p className="footpara">
            © Copyright 2024 Urban Company. All rights reserved. | CIN: U74140DL2014PTC274413
          </p>
        </div>
      </div>
    </>
  );
}

export default All10;
