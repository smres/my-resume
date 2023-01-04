import React from "react";

// Styles
import style from "./FirstSection.module.css";

// Images
import cityBannerImage from "../assets/images/city-4791269_1280.png";

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
            style={{ pointerEvents: "none" }}
            draggable={false}
            src={cityBannerImage}
            alt="city-logo-right"
          />
        </div>
      </div>
    </>
  );
};

export default FirstSection;
