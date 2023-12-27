import "./contact.css";
import React from "react";


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className="callas">
          <div className="CallToUs">
            
            <h2>Call To Us</h2>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>phone +216 92580162</p>
        </div>
        <div className="border"></div>
        <div className="write">
          <div className="WriteToUs">
            
            <h2> Write To Us </h2>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>

      <div className="contact-middle">
        <div className="first-input">
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Last Name" name="lastName" />
          <input type="text" placeholder="Email" name="email" />
        </div>
        <div className="second-input">
          <textarea placeholder="Put your comments here" />
        </div>
        <div className="contact-button">
          <button> send Message </button>
        </div>
      </div>
    </div>
  );
};
export default Contact

