import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <p>
        The entirety of this site is protected by copyright © 2022 Travel
        Experience
      </p>
      <ul>
        <li>
          <Link to="/">Terms and conditions</Link>
        </li>
        <li>
          <Link to="/">Privacy Policy</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
