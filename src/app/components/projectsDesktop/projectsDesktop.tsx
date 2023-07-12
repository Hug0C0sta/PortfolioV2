"use client";
import React, { useEffect, useRef } from "react";
import "./projectsDesktop.scss";
import { CarouselMobile } from "../CarouselMobile/CarouselMobile";

export const ProjectsDesktop = () => {
  const myRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
    observer.observe(myRef.current!);
  }, []);

  return (
    <div>
      <div className="projectsDesktop hidden" ref={myRef}>
        <h3>Projects</h3>
        <h1>teste</h1>
      </div>
    </div>
  );
};
