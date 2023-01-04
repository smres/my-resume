import React from "react";

// Styles
import style from "./FirstSection.module.css";

// Images
import cityBannerImage from "../assets/images/city-4791269_1280.png";
import Space from "../assets/images/space.png";
import Robat from "../assets/images/robat.png";
import Sit from "../assets/images/sit.png";

const FirstSection = () => {
  return (
    <>
      <div className={style.wrapperFistSection}>
        <h3 className={`${style.HeaderMyNameAndJob} ${style.fontBold}`}>
          Mohammad Reza Esmailzadeh
        </h3>
        <h5 className={`${style.HeaderMyNameAndJob} ${style.fontMedium}`}>
          Web Developer Programmer
        </h5>
      </div>
      <div className={style.bannerWrapper}>
        <div className={style.textRight}>
          <span>i am very glad that you visited my resume site.</span>
          <span>i hope you like the contents of this page.</span>
          <span>
            Also, I would be grateful if you could give me feedback by email.
          </span>
        </div>
        <div className={style.imageLeft}>
          <img
            style={{ width: "100px", height: "80px" }}
            className={style.abs1}
            src={Space}
            alt="space"
          />
          <img
            style={{ width: "100px", height: "80px" }}
            className={style.abs2}
            src={Robat}
            alt="space"
          />
          <img
            style={{ width: "100px", height: "80px" }}
            className={style.abs3}
            src={Sit}
            alt="space"
          />
          <img
            style={{ pointerEvents: "none" }}
            draggable={false}
            src={cityBannerImage}
            alt="city-logo-right"
          />
        </div>
      </div>
      <hr
        style={{
          backgroundColor: "#b7b7b7",
          height: "0.2rem",
          marginTop: "10rem",
        }}
      />
    </>
  );
};

export default FirstSection;
