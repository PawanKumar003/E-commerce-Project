import React from "react";
import { BsInstagram, BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";

const footer = () => {
  return (
    <div className="footer">
      <div className="col-md-3">
        <h4>About us</h4>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="col-md-3 follow-page">
        <h4>Follow Us</h4>
        <div className="social-page">
          <span>
            <BsInstagram />
          </span>
          <span>
            <BsFacebook />
          </span>
          <span>
            <BsYoutube />
          </span>
          <span>
            <BsLinkedin />
          </span>
        </div>
      </div>
      <div className="col-md-3 subscribe-details">
        <h4>Subscribe</h4>
        <input type="email" placeholder="Enter Email" />
        <br />
        <button>Subscribe</button>
      </div>
      <div className="col-md-3 contact-details">
        <h4>Contact Us</h4>
        <p style={{ fontSize: "1.5rem" }}>+91-1234567890</p>
      </div>
    </div>
  );
};

export default footer;
