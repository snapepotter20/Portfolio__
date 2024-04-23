import React from "react";
import "./Contact.css";
import {linkedin, github , gmailImg} from "../../assets";
// import emailjs from '@emailjs/browser';

const Contact = () => {
  // const [flag,setFlag] = useState(false);
  // const [name,setName] = useState('');
  // const [email,setEmail] = useState('');
  // const [msg,setMsg] = useState('');
  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  // const messageThank = ()=>{
  //   setFlag(true);
  //   setTimeout(()=>{
  //     setFlag(false);
  //   },3000)
  //   setName('');
  //   setEmail('');
  //   setMsg('');
  // }

  return (
    <section id="contactPage">
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <p className="contactDesc">
          Email : skk280540@gmail.com
        </p>
        <p className="contactDesc">
          Phone No. : 8290977266
        </p>
        {/* <p className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </p> */}
        {/* <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your name" value= {name} onChange={(e)=>setName(e.target.value)}/>
          <input type="email" className="email" placeholder="Your email"  value= {email} onChange={(e)=>setEmail(e.target.value)}/>
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            className="msg"
            value= {msg}
            onChange={(e)=>setMsg(e.target.value)}
          ></textarea>
          <button type="submit" className="submitBtn" value="Submit" onClick={messageThank} disabled={!name || !email || !msg}>
            Submit
          </button>
          {flag ? <p className="form-para">Thankyou for submitting the form.</p> :null}
          </form> */}
          <div className="links">
            <a
              href="https://www.linkedin.com/in/sahil-kumar-5487561ba/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={linkedin} alt="linkedIn" className="link" />
            </a>
            <a
              href="https://github.com/snapepotter20"
              rel="noreferrer"
              target="_blank"
            >
              <img src={github} alt="Github" className="link" />
            </a>
            <a
               href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=skk280540@gmail.com`}
              rel="noreferrer"
              target="_blank"
            >
              <img src={gmailImg} alt="link" className="link" />
            </a>
          </div>
       
      </div>
    </section>
  );
};

export default Contact;
