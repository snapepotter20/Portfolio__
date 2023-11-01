import React from "react";
import "./Contact.css";
import { facebookIcon, linkedin, github } from "../../assets";

const Contact = () => {
  return (
    <section id="contactPage">
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <p className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </p>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your name" />
          <input type="email" className="email" placeholder="Your email" />
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            className="msg"
          ></textarea>
          <button type="submit" className="submitBtn" value="Submit">
            Submit
          </button>
          <div className="links">
            <img src={linkedin} alt="linkedIn" className="link" />
            <img src={github} alt="Github" className="link" />
            <img src={facebookIcon} alt="link" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
