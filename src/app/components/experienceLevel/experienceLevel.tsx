import React from "react";
import "./experienceLevel.scss";

interface Props {
  level: number;
  image: string;
  name: string;
}

export const ExperienceLevel = (props: Props) => {
  return (
    <div className="experience-level">
      <img src={props.image} alt={props.name} />
      <div className="experience-level__unit">
        <div
          className="experience-level__measure"
          style={{ width: `${props.level}%` }}
        ></div>
      </div>
    </div>
  );
};
