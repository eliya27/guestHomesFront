import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading_group">
        <div className="gpt3__footer-heading">
          <h1>Subscribe to our news letter to explore more destinations</h1>
        </div>
        <div className="gpt3__footer-btn">
          <p>Enter your email</p>
        </div>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <h3>
            MyReserve<small>&trade;</small>
          </h3>
          <p>
            <small>Dar es salaam.</small>
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>
            <FontAwesomeIcon icon={faMapPin} /> Temeke, Dar-es-salaam
          </p>
          <p>+255-714344438</p>
          <p>eliyagervas27@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>
          2022 <small>&copy;</small> MyReserve(systems). All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
