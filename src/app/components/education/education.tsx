"use client";
import React, { useEffect, useRef } from "react";
import "./education.scss";

export const Education = () => {
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
    <div className="education hidden" ref={myRef}>
      <h3>Education</h3>
      <div className="education__course">
        <p>🎓</p>
        <p>
          Eletronic Systems and Computers Professional Course - Politécnico de
          Viana do Castelo (2018/2020)
        </p>
      </div>
      <div className="education__course">
        <p>🎓</p>
        <p>
          Computer Science Bachelors Degree - Politécnico de Viana do Castelo
          (2020/2023)
        </p>
      </div>
    </div>
  );
};
