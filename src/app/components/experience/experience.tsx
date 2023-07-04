import React from "react";
import Image from "next/image";
import { ExperienceLevel } from "../experienceLevel/experienceLevel";

import "./experience.scss";

export const Experience = () => {
  return (
    <div className="experience">
      <h3>Experience</h3>
      <p>
        During my degree, I was always more interested in the front-end part,
        which led to doing more work in this area. <br />I used technologies
        like HTML, CSS, JavaScript, Ionic, Flutter and React. In addition, I
        also developed REST APIs in Java.
      </p>
      <div className="experience-charts">
        <ExperienceLevel level={90} image="./react.png" name="react" />
        <ExperienceLevel level={85} image="./js.png" name="javascript" />
        <ExperienceLevel level={85} image="./html.png" name="html" />
        <ExperienceLevel level={85} image="./css.png" name="css" />
        <ExperienceLevel level={80} image="./flutter.png" name="flutter" />
        <ExperienceLevel level={80} image="./java.png" name="java" />
        <ExperienceLevel level={70} image="./ionic.png" name="ionic" />
        <ExperienceLevel level={65} image="./python.png" name="python" />
      </div>
    </div>
  );
};
