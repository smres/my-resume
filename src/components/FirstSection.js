import React from "react";

// Styles
import style from "./FirstSection.module.css";

// Images
import github from "../assets/images/github.png";
import linkdin from "../assets/images/linkedin.png";
import telegram from "../assets/images/telegram.png";
import instagram from "../assets/images/instagram.svg";
import bannerPersonal from "../assets/images/bannerPersonal.png";
import cityBannerImage from "../assets/images/city-4791269_1280.png";
import Space from "../assets/images/space.png";
// import Robat from "../assets/images/robat.png";
// import Sit from "../assets/images/sit.png";

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

        <div className={style.logoRightWrapper}>
          <div
            className={`${style.logo} ${style.tooltip}`}
            data-tooltip="Github"
            data-tooltip-pos="down"
            data-tooltip-length="fit"
          >
            <a href="#">
              <img className={style.imgLogo} src={github} alt="github-logo" />
            </a>
          </div>
          <div
            className={`${style.logo} ${style.tooltip}`}
            data-tooltip="Linkedin"
            data-tooltip-pos="down"
            data-tooltip-length="fit"
          >
            <a href="#">
              <img className={style.imgLogo} src={linkdin} alt="linkdin-logo" />
            </a>
          </div>
          <div
            className={`${style.logo} ${style.tooltip}`}
            data-tooltip="Telegram"
            data-tooltip-pos="down"
            data-tooltip-length="fit"
          >
            <a href="#">
              <img
                className={style.imgLogo}
                src={telegram}
                alt="telegram-logo"
              />
            </a>
          </div>
          <div
            className={`${style.logo} ${style.tooltip}`}
            data-tooltip="Instagram"
            data-tooltip-pos="down"
            data-tooltip-length="fit"
          >
            <a href="#">
              <img
                className={style.imgLogo}
                src={instagram}
                alt="instagram-logo"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={style.bannerWrapper}>
        <div className={style.leftwrapperBanner}>
          <div className={style.textRight}>
            <span>i am very glad that you visited my resume site.</span>
            <span>i hope you like the contents of this page.</span>
            <span>
              Also, I would be grateful if you could give me feedback by email.
            </span>
          </div>
          <div className={style.bannerLeftPersonal}>
            <img
              style={{ width: "100px", height: "80px" }}
              className={style.abs1}
              src={Space}
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
        <div className={style.imageLeft}>
          {/*<img
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
          />{" "}
          */}
          <img
            style={{ pointerEvents: "none" }}
            draggable={false}
            src={bannerPersonal}
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
