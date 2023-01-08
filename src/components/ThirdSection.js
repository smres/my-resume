import React from "react";

// Styles
import style from "./ThirdSection.module.css";

// Helper Array List
import { lastestProjectList } from "../objectHelpText/textes.js";

const ThirdSection = () => {
  return (
    <div>
      <h3 className={style.lastestProjectText}>My Lastest Projects</h3>

      <div className={style.containerProjects}>
        <h4>Stuff i made</h4>
        <h5>Here are some websites i made for fun. Enjoy :)</h5>

        <div className={style.wrapperLastestProjectBoxes}>
          {lastestProjectList.map((item) => {
            return (
              <div key={item.title}>
                <img src={item.img} alt={item.title} />
                <h4>{item.title}</h4>
                <h5>{item.subTitle}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
