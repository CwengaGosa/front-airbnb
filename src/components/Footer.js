import React from "react";
import "./Footer.css";
import LanguageIcon from '@mui/icons-material/Language';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="Home.js">Help Center</a>
            </li>
            <li>
              <a href="Home.js">Safety information</a>
            </li>
            <li>
              <a href="Home.js">Cancellation options</a>
            </li>
            <li>
              <a href="Home.js">Our COVID-19 Response</a>
            </li>
            <li>
              <a href="Home.js">Supporting people with disabilities</a>
            </li>
            <li>
              <a href="Home.js">Report a neighborhood concern</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Community</h3>
          <ul>
            <li>
              <a href="Home.js">Airbnb.org: disaster relief housing</a>
            </li>
            <li>
              <a href="Home.js">Support: Afghan refugees</a>
            </li>
            <li>
              <a href="Home.js">Celebrating diversity & belonging</a>
            </li>
            <li>
              <a href="Home.js">Combating discrimination</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Hosting</h3>
          <ul>
            <li>
              <a href="Home.js">Try hosting</a>
            </li>
            <li>
              <a href="Home.js">AirCover: protection for Hosts</a>
            </li>
            <li>
              <a href="Home.js">Explore hosting resources</a>
            </li>
            <li>
              <a href="Home.js">Visit our community forum</a>
            </li>
            <li>
              <a href="Home.js">How to host responsibly</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li>
              <a href="Home.js">Newsroom</a>
            </li>
            <li>
              <a href="Home.js">Learn about new features</a>
            </li>
            <li>
              <a href="Home.js">Letter from our founders</a>
            </li>
            <li>
              <a href="Home.js">Careers</a>
            </li>
            <li>
              <a href="Home.js">Investors</a>
            </li>
            <li>
              <a href="Home.js">Airbnb Luxe</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2022 Airbnb, Inc. · <span>Privacy</span> · <span>Terms</span> ·{" "}
          <span>Sitemap</span>
        </p>
        <div className="footer-icons">
          <LanguageIcon /> · <span>English (US)</span> · <AttachMoneyIcon /> ·{" "}
          <span>USD</span> ·
          <FacebookIcon />
          <XIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
