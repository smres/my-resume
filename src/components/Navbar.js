import React from "react";
import { Link } from "react-router-dom";

// Styles
import style from "./Navbar.module.css";

// Images Logo
import mainLogo from "../assets/images/mainLogo.png";

const Navbar = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.mainLogo}>
          <Link to="/">
            <img width="110px" height="60px" src={mainLogo} alt="mainLogo" />
          </Link>
        </div>
        <div className={style.navbarLeftWrapper}>
          <span className={style.spanAnimate}>Work</span>
          <span className={style.spanAnimate}>Contact me</span>
          <span className={style.spanAnimate}>About me</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
