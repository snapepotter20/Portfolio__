import React from "react";
import "./Works.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WorksTile } from "./WorksTile";
// import { expenseTracker, eCommerce, youtubeClone } from "../../assets";

const Works = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  console.log("works tile", WorksTile);
  return (
    <div className="works">
      <h1 className="worksTitle">My Works</h1>
      <p className="worksDescription">
        Here are some of the projects I've been involved with.
      </p>
      <div className="worksBars">
        <Slider {...settings}>
          {WorksTile.map((item, index) => (
            <div className="worksBars1">
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
      </div>
    </div>
  );
};

export default Works;
