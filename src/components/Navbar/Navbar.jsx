import React, { useState } from "react";
import { MenuItems } from "./MenuItem";
import { Link } from "react-router-dom";
import "./Navbar.scss";
console.log(MenuItems);
const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">
        <img
          src="http://ringersoft.com/wp-content/uploads/2019/10/ringer-soft-logo.png"
          alt=""
        />
      </h1>
      <div className="menu-icon" onClick={() => setClicked(!clicked)}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item) => (
          <li key={item.index}>
            {" "}
            <Link className={item.cName} to={item.url}>
              {item.title}
            </Link>{" "}
          </li>
        ))}
      </ul>
      <button className="btn">Sign Up</button>
    </nav>
  );
};

export default Navbar;
