import React from "react";

// Styles
import style from "./FirstSection.module.css";

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
          <span>I am very glad that you visited my resume site.</span>
          <span>I hope you like the contents of this page.</span>
          <span>
            Also, I would be grateful if you could give me feedback by email.
          </span>
        </div>
        <div className={style.imageLeft}></div>
      </div>
    </>
  );
};

export default FirstSection;
