import React, { useState } from "react";
import "./Intro.css";
import { myimg } from "../../assets";

const Intro = () => {
  const [flag, setFlag] = useState(false);
  const readMore = () => {
    setFlag(!flag);
  };
  return (
    <section className="intro">
      <div className={flag ? 'introContent1' : 'introContent'}>
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Sahil Kumar</span> <br /> Frontend
          Developer
        </span>
        <p className="introPara">
          I'm a tech enthusiast and a motivated developer with a strong
          background in frontend development, coupled with proficiency in Data
          structures and algorithms.
        </p>
        {
            flag ? <p className="introPara2">
            I am actively seeking an opportunity to delve into my passion for
              development and to gain experience and industry exposure of working in
              a professional environment while contributing to the industry in an
              innovative way.My proficiency in problem-solving coupled
              with my fluency in technologies like HTML, CSS , Bootstrap ,
              Javascript and React,positions me well for this endeavor. I have
              completed a course on responsive web design and made few projects on
              it. And I have also successfully cleared the Hackerrank CSS skill test
              and have also earned a CSS skill badge on LinkedIn. And my skills with
              data structures along with C++ and C further bolster my capabilities.
              The prospect of collaborating with your esteemed organization excites
              me greatly . It would be a great opportunity for me to leverage my
              skills while embarking on a journey of exploration and growth.
            </p> : null
        } 
        
        <button className="introButton" onClick={readMore}>
          Read more...
        </button>
      </div>
      <img src={myimg} alt="bgimage" className="bg" />
    </section>
  );
};

export default Intro;
