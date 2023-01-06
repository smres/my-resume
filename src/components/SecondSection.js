import React from "react";

// Styles
import style from "./SecondSection.module.css";

// Images
import HtmlCss from "../assets/images/html-css.svg";
import Javascript from "../assets/images/javascript.svg";
import ReactIcon from "../assets/images/react.svg";
import Git from "../assets/images/gitSkill.svg";
import GitHub from "../assets/images/githubSkill.svg";
import GitLab from "../assets/images/gitlabSkill.svg";
import Sass from "../assets/images/sassSkill.svg";
import Redux from "../assets/images/redux.svg";

const SecondSection = () => {
  return (
    <>
      <div className={style.container}>
        <h3 className={style.skillsText}>My Skills and Advantage</h3>

        <div className={style.wrapperSkillsBox}>
          <div className={`${style.boxSkill}`}>
            <img src={HtmlCss} alt="html5-css3-feature" />
            <p>HTML5/CSS3</p>
          </div>
          <div className={`${style.boxSkill}`}>
            <img src={Sass} alt="sass-feature" />
            <p>SASS</p>
          </div>
          <div className={`${style.boxSkill}`}>
            <img src={Javascript} alt="javascript-feature" />
            <p>Javascript</p>
          </div>
          <div className={`${style.boxSkill}`}>
            <img src={ReactIcon} alt="react-feature" />
            <p>React.Js</p>
          </div>
          <div className={`${style.boxSkill}`}>
            <img src={Git} alt="git-hub-feature" />
            <p>Git</p>
          </div>
          <div className={`${style.boxSkill}`}>
            <img src={GitHub} alt="git-lab-feature" />
            <p>GitHub</p>
          </div>
          <div className={`${style.boxSkill}`}>
            <img src={GitLab} alt="git-feature" />
            <p>GitLab</p>
          </div>
          <div className={`${style.boxSkill}`}>
            <img src={Redux} alt="redux-feature" />
            <p>Redux</p>
          </div>
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

export default SecondSection;
