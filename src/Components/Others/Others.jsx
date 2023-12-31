import React from "react";
import "./Others.css";
import { hireme, leetcode, hackerrank, codedamn } from "../../assets";

const Others = () => {
  return (
    <div className="others">
      <h3 className="othersTitle">Resume link and few coding profiles.</h3>
      <div className="othersBars">
        <div className="othersBarsDiv">
          <img src={hireme} alt="btnImg" className="othersBarsBtnImg" />
          <a
            href="https://drive.google.com/file/d/11xW3V6S_Hmwpn8iN6-lWhC-xyD9nsyCh/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            <p className="othersBarsBtnPara">View Resume</p>
          </a>
        </div>
        <div className="othersBarsDiv">
          <img src={leetcode} alt="btnImg" className="othersBarsBtnImg" />
          <a
            href="https://leetcode.com/jumboclif42/"
            rel="noreferrer"
            target="_blank"
          >
            <p className="othersBarsBtnPara">View Leetcode</p>
          </a>
        </div>
        <div className="othersBarsDiv">
          <img src={hackerrank} alt="btnImg" className="othersBarsBtnImg" />
          <a
            href="https://www.hackerrank.com/SahilKumar2854/"
            rel="noreferrer"
            target="_blank"
          >
            <p className="othersBarsBtnPara">View Hackerrank</p>
          </a>
        </div>
        <div className="othersBarsDiv">
          <img src={codedamn} alt="btnImg" className="othersBarsBtnImg" />
          <a
            href="https://codedamn.com/user/hotcoder"
            rel="noreferrer"
            target="_blank"
          >
            <p className="othersBarsBtnPara">View Codedamn</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Others;
