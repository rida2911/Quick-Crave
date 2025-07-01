import React from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        {/* — Left block — */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="QuickCrave logo" className="footer-logo" />

          <p>
            QuickCrave delivers your favourite meals fresh and fast from the
            best local kitchens⁠—so you can enjoy restaurant‑quality food
            whenever and wherever hunger strikes. Order in seconds, track your
            rider live, and taste happiness at your doorstep.
          </p>

          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon}  alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* — Middle block — */}
        <div className="footer-content-center">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1&nbsp;212&nbsp;256&nbsp;7890</li>
            <li>support@quickcrave.com</li>
          </ul>
        </div>

        {/* — Right block — */}
        <div className="footer-content-right">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About&nbsp;Us</li>
            <li>Careers</li>
            <li>Privacy&nbsp;Policy</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">
        © {new Date().getFullYear()} QuickCrave • All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
