import React from "react";
import "./Works.css";
import { expenseTracker , eCommerce , youtubeClone } from "../../assets";

const Works = () => {
  return (
    <section className="works">
      <h1 className="worksTitle">My Works</h1>
      <p className="worksDescription">
        Here are some of the projects I've been involved with.
      </p>
      <div className="worksBars">
        <div className="worksBars1">
          <img src={expenseTracker} alt="worksBarsImg" className="worksBarsImg" />
          <h2 className="worksBars1Heading">Expense Tracker</h2>
          <p className="worksBars1Para">
            This React-based app tracks and displays an individual's monthly
            expenses, offering a bar chart representation of cumulative monthly
            spending and enabling year-round expense analysis.
          </p>
          <button className="worksBars1Btn">
            <a href="https://github.com/snapepotter20/Expense-Tracker" rel="noreferrer" target="_blank">
              View Source
            </a>
          </button>
        </div>
        <div className="worksBars1">
          <img src={eCommerce} alt="worksBarsImg" className="worksBarsImg" />
          <h2 className="worksBars1Heading">E-commerce</h2>
          <p className="worksBars1Para">
            This website is an e-commerce platform developed using React,
            Material UI, Commerce.js, and Stripe. It features a responsive
            design.
          </p>
          <button className="worksBars1Btn">
            <a href="https://github.com/snapepotter20/E-commerce" rel="noreferrer" target="_blank">
              View Source
            </a>
          </button>
        </div>
        <div className="worksBars1">
          <img src={youtubeClone} alt="worksBarsImg" className="worksBarsImg" />
          <h2 className="worksBars1Heading">Youtube-clone</h2>
          <p className="worksBars1Para">
            This project is built using React and Material UI. It includes a
            variety of concepts, including Props, Hooks , React Router.
          </p>
          <button className="worksBars1Btn">
            <a href="https://github.com/snapepotter20/Youtube-clone" rel="noreferrer" target="_blank">
              View Source
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;