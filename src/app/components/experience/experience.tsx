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
        <div className="experience-level">
          <Image src="/java.png" alt="Java" width={30} height={30} priority />
          <div>
            <ExperienceLevel level={50} />
          </div>
        </div>
        <div className="experience-level">
          <Image
            src="/js.png"
            alt="JavaScript"
            width={30}
            height={30}
            priority
          />
          <div>
            <ExperienceLevel level={40} />
          </div>
        </div>
        <div className="experience-level">
          <Image src="/react.png" alt="React" width={30} height={30} priority />
          <div>
            <ExperienceLevel level={60} />
          </div>
        </div>
        <div className="experience-level">
          <Image
            style={{ width: "30px", height: "30px" }}
            src="/html.png"
            alt="HTML"
            width={30}
            height={30}
            priority
          />
          <div>
            <ExperienceLevel level={60} />
          </div>
        </div>
        <div className="experience-level">
          <Image
            style={{ width: "30px", height: "30px" }}
            src="/css.png"
            alt="CSS"
            width={30}
            height={30}
            priority
          />
          <div>
            <ExperienceLevel level={60} />
          </div>
        </div>
      </div>
    </div>
  );
};
