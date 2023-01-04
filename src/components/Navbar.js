import React from "react";
import { Link } from "react-router-dom";

// Styles
import style from "./Navbar.module.css";

// Images Logo
import github from "../assets/images/github.png";
import linkdin from "../assets/images/linkedin.png";
import telegram from "../assets/images/telegram.png";
import instagram from "../assets/images/instagram.svg";
import mainLogo from "../assets/images/mainLogo.png";

const Navbar = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.navbarLeftWrapper}>
          <span className={style.spanAnimate}>Work</span>
          <span className={style.spanAnimate}>Contact me</span>
          <span className={style.spanAnimate}>About me</span>
        </div>
        <div className={style.mainLogo}>
          <Link to="/">
            <img width="110px" height="60px" src={mainLogo} alt="mainLogo" />
          </Link>
        </div>
        <div className={style.logoRightWrapper}>
          <div className={style.logo}>
            <a href="#">
              <img className={style.imgLogo} src={github} alt="github-logo" />
            </a>
          </div>
          <div className={style.logo}>
            <a href="#">
              <img className={style.imgLogo} src={linkdin} alt="linkdin-logo" />
            </a>
          </div>
          <div className={style.logo}>
            <a href="#">
              <img
                className={style.imgLogo}
                src={telegram}
                alt="telegram-logo"
              />
            </a>
          </div>
          <div className={style.logo}>
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
    </div>
  );
};

export default Navbar;
