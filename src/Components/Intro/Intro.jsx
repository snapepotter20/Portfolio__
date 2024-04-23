import React, { useState } from "react";
import "./Intro.css";
import { myimg } from "../../assets";
import { motion } from 'framer-motion';


const Intro = () => {
  const [flag, setFlag] = useState(false);
  const readMore = () => {
    setFlag(!flag);
  };
  return (
    <div className="intro">
      <div className={flag ? "introContent1" : "introContent"}>
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Sahil Kumar</span> <br /> Fullstack
          Developer
        </span>
        <p className="introPara">
          I'm a tech enthusiast and a motivated developer with a strong
          background in frontend development, coupled with proficiency in Data
          structures and algorithms.
        </p>
        {flag ? (
          <p className="introPara2">
            I am actively seeking an opportunity to delve into my passion for
            development and to gain experience and industry exposure of working
            in a professional environment while contributing to the industry in
            an innovative way. It will help me develop my existing skills and
            learn new skills with your firm. My proficiency in problem-solving
            coupled with my fluency in technologies like HTML, CSS , Tailwind ,
            Javascript , ReactJS, NextJS , NodeJS , ExpressJS and MongoDB positions me well for this
            endeavor. I have completed a course on responsive web design and
            made various projects on it. And I have also successfully cleared the
            Hackerrank CSS skill test and have also earned a CSS skill badge on
            LinkedIn. And my skills with data structures along with C++ and C
            further bolster my capabilities. The prospect of collaborating with
            your esteemed organization excites me greatly . It would be a great
            opportunity for me to leverage my skills while embarking on a
            journey of exploration and growth.
          </p>
        ) : null}

        <button className="introButton" onClick={readMore}>
          Read more...
        </button>
      </div>
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10, }}
      >
      <img src={myimg} alt="bgimage" className="bg" />
      </motion.div>
    </div>
  );
};

export default Intro;
