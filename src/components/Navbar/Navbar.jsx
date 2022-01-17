import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <>
      <nav id="navbar" class="">
        <div class="nav-wrapper">
          <div class="logo">
            <Link to="/home">
              <img src="./Logo.png" alt="" />
            </Link>
          </div>

          <ul id="menu">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div class="menuIcon" onClick={() => setBurgerMenu(!burgerMenu)}>
        <span class="icon icon-bars"></span>
        <span class="icon icon-bars overlay"></span>
      </div>

      {burgerMenu && (
        <div class="overlay-menu">
          <ul id="menu">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
