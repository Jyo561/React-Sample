import React from "react";
import logo from "../logo.png";

const Navbar = () => {
   return(
<nav className="navbar navbar-expand-md navbar-dark ">

<div class="container">
  
  <a className="navbar-brand" href="blank"><img src={logo} alt="logo.." className="logo" width="70%" height="50%" style={{marginLeft:10}}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ms-auto mt-2 mt-md-0">
      <li className="nav-item active">
        <a className="nav-link" href="blank">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="blank">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="blank">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="blank">Our Work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="blank">Contact</a>
      </li>
    </ul>
  </div>
</div>
</nav>

);
};

export default Navbar;
