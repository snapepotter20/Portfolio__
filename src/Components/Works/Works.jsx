import React, { useState,useRef } from "react";
import "./Works.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { WorksTile } from "./WorksTile";
// import { expenseTracker, eCommerce, youtubeClone } from "../../assets";

const DivContainer = styled.div`
  .slick-slide {
    padding-right: 10px;
  }
  .slick-dots li button:before {
    font-size: 16px;
    color: #999898;
  }

  .slick-dots li.slick-active button:before {
    font-size: 16px;
    color: #1d4ed8; /* color of active dots */
    padding: 0 5px; /* padding to the active dot */
    background-color: #1d4ed8; /* Set the background color of the active dot */
    border-radius: 16px;
    margin-right: 0 10px;
  }
`;

const CustomButton = ({ isActive, onClick, children }) => (
  <div
    className={`custom-button ${isActive ? "activeBtn" : "not-activeBtn"}`}
    onClick={onClick}
  >
    <button className={`button-text ${isActive ? "active-text" : "not-active-text"}`}>
      {children}
    </button>
  </div>
);

const CustomButton2 = ({ isActive, onClick, children }) => (
  <div
    className={`custom-button ${isActive ? "not-activeBtn" : "activeBtn"}`}
    onClick={onClick}
  >
    <button className={`button-text ${isActive ? "not-active-text" : "active-text"}`}>
      {children}
    </button>
  </div>
);



const Works = () => {

  const sliderRef = useRef(null);
  const [isForwardActive, setIsForwardActive] = useState(true);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 995,
        settings: {
          arrows: false,
          rows: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          rows: 1,
          slidesToShow: 1.6,
        },
      },
      {
        breakpoint: 540,
        settings: {
          arrows: false,
          rows: 1,
          slidesToShow: 1,
        },
      },
    ],
  };
  const handlePrev = () => {
    setIsForwardActive(false);
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    setIsForwardActive(true);
    sliderRef.current?.slickNext();
  };
  console.log("works tile", WorksTile);
  return (
    <div className="works">
      <h1 className="worksTitle">My Works</h1>
      <p className="worksDescription">
        Here are some of the projects I've been involved with.
      </p>
      <DivContainer className="worksBars">
        <Slider ref={sliderRef} {...settings}>
          {WorksTile.map((item, index) => (
            <div className="worksBars1" key={index}>
              <img src={item.img} alt="worksBarsImg" className="worksBarsImg" />
              <h2 className="worksBars1Heading">{item.heading}</h2>
              <p className="worksBars1Para">{item.para}</p>
              <button className="worksBars1Btn">
                <a href={item.button} rel="noreferrer" target="_blank">
                  View Source
                </a>
              </button>
            </div>
          ))}
        </Slider>
      </DivContainer>
      <div className="custom-container">
      <CustomButton2 isActive={isForwardActive} onClick={handlePrev}>
        <IoIosArrowBack className="icon" />
      </CustomButton2>
      <CustomButton isActive={isForwardActive} onClick={handleNext}>
        <IoIosArrowForward className="icon" />
      </CustomButton>
    </div>
    </div>
  );
};

export default Works;
