import React from "react";
interface Props {
  level: number;
}
export const ExperienceLevel = (props: Props) => {
  return (
    <div
      className="experience-value"
      style={{
        width: `${props.level}%`,
      }}
    ></div>
  );
};
