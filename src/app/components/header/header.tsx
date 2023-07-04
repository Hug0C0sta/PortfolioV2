import React from "react";
import Image from "next/image";
import "./header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-info">
        <h1>Hi, i´m Hugo! 👋</h1>
        <h2>Software Developer</h2>
      </div>
      <Image
        className="header-photo"
        src="/me.png"
        alt="Me"
        width={180}
        height={37}
        priority
      />
    </div>
  );
};
