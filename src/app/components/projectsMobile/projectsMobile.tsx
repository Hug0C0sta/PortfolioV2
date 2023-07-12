"use client";
import React, { useEffect, useRef } from "react";
import "./projectsMobile.scss";
import { CarouselMobile } from "../CarouselMobile/CarouselMobile";

export const ProjectsMobile = () => {
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
      <div className="projectsMobile hidden" ref={myRef}>
        <h3>Projects</h3>
        <CarouselMobile />
      </div>
    </div>
  );
};
