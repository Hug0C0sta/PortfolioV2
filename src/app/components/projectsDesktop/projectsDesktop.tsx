"use client";
import React, { useEffect, useRef } from "react";
import "./projectsDesktop.scss";

const projects = [
  {
    title: "liberAPP",
    image: "./liberapp.png",
    description:
      "This application served as a book review platform. In addition, it had a market for selling books between users.",
    tec: "Ionic",
    link: "https://youtu.be/sB8mqa5pQZA",
  },
  {
    title: "appPOS",
    image: "./appos.png",
    description:
      "This app was able to consult data from a business, such as consulting sales, expenses, and business indices.",
    tec: "Flutter",
    link: "https://youtu.be/Y5C7JKHIf08",
  },
];
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

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="projectsDesktop hidden" ref={myRef}>
      <h3>Projects</h3>
      <div className="projectsDesktop__container">
        {projects.map((project) => (
          <div
            className="projectsDesktop__card"
            onClick={() => openLink(project.link)}
          >
            <div className="teste">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="projectsDesktop__content">
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
