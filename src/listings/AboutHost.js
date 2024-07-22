import React from "react";
import "./AboutHost.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LockIcon from "@mui/icons-material/Lock";
import PetsIcon from "@mui/icons-material/Pets";
import EventIcon from "@mui/icons-material/Event";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { SmokeFree } from "@mui/icons-material";

const AboutHost = () => {
  return (
    <div className="about-host-container">
      <div className="host-details">
        <img src="https://s3-alpha-sig.figma.com/img/a615/f544/bf4d532059a9b5a4735809663411f54b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nQEoXTkiCBgFaQikgc4aCRq1IcjjeXqbLAV~yxTqQHJEdwlcMt-DmTo6d0IHUpg4hVdsq9vY038AjTZ64QhSiDaLr1mrLjjhLNW2-BRoGXT0yjvG6kGMbJKnQ9aQ6lA77TqRBnlylkRSAqMulqNhEhqVA4rsI2HM~0HiFv9sG1t3pVWh~amt1J0GfSJ0MPwFm4UYVM9OwpDWrf6l17grf9rYfTfVdwV9ANUdGBOclBCG2h5YKb100-cyCZR6V0tPkfx7ahxGDQodDFSUpqqH8uFApzO0G5XDT-TpnklB8vatCQTRcg-EaclOJpTxhpNyWeH87uxFRagChPvmlK8DbQ__" alt="Host" className="host-image" />
        <div className="host-info">
          <h2>Hosted by Ghazal</h2>
          <p>Joined May 2021</p>
          <p>
            <span>⭐</span> 12 Reviews <span>✔️</span> Identity verified <span>🌟</span> Superhost
          </p>
          <p>Ghazal is a Superhost</p>
          <p>
            Superhosts are experienced, highly rated hosts who are committed to
            providing great stays for guests.
          </p>
          <p>Response rate: 100%</p>
          <p>Response time: within an hour</p>
          <button className="contact-host-button">Contact Host</button>
          <p className="disclaimer">
            To protect your payment, never transfer money or communicate outside of
            the Airbnb website or app.
          </p>
        </div>
      </div>

  
      <div className="things-to-know">
        <h3>Things to know</h3>
        <div className="things-to-know-content">
          <div className="house-rules">
            <h4>House rules</h4>
            <ul>
              <li><AccessTimeIcon /> Check-in: After 4:00 PM</li>
              <li><AccessTimeIcon /> Checkout: 10:00 AM</li>
              <li><LockIcon /> Self check-in with lockbox</li>
              <li><ChildCareIcon /> Not suitable for infants (under 2 years)</li>
              <li><SmokeFree/> No smoking</li>
              <li><PetsIcon /> No pets</li>
              <li><EventIcon /> No parties or events</li>
            </ul>
          </div>
          <div className="health-safety">
            <h4>Health & safety</h4>
            <ul>
              <li><CleanHandsIcon /> Committed to Airbnb's enhanced cleaning process. <a href="Home.js">Show more</a></li>
              <li><VerifiedUserIcon /> Airbnb's social-distancing and other COVID-19-related guidelines apply</li>
              <li><ReportProblemIcon /> Carbon monoxide alarm</li>
              <li><ReportProblemIcon /> Smoke alarm</li>
              <li><ReportProblemIcon /> Security Deposit - if you damage the home, you may be charged up to $566</li>
            </ul>
          </div>
          <div className="cancellation-policy">
            <h4>Cancellation policy</h4>
            <p>Free cancellation before Feb 14</p>
            <a href="Home.js">Show more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHost;
