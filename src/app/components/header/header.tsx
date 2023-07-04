import React from "react";
import Typewriter from "typewriter-effect";

import "./header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-info">
        <h1>Hi, i´m Hugo! 👋</h1>
        <h2>Software Developer</h2>
      </div>
      <img className="header-photo" src="./me.png" alt="Me" />
    </div>
  );
};
