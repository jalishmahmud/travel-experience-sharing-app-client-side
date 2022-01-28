import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Navigation.css";
const Navigation = () => {
  return (
    <header>
      <div className="main-menu">
        <div>
          <Link to="/">
            <img width="230px" src={logo} alt="" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
            <li>
              <Link className="nav-button" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="nav-button" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
