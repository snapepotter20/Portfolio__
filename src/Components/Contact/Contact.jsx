import React , {useRef} from "react";
import "./Contact.css";
import { facebookIcon, linkedin, github } from "../../assets";
// import emailjs from '@emailjs/browser';


const Contact = () => {
    const form =useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        e.target.reset();
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
      };
    
  return (
    <section id="contactPage">
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <p className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </p>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
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
