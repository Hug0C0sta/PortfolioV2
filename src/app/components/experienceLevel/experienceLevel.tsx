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
      <img src={props.image} alt={props.name} style={{}} />
      <div className="experience-unit">
        <div
          className="experience-measure"
          style={{ width: `${props.level}%` }}
        ></div>
      </div>
    </div>
  );
};
