"use client";
import React, { useState, useEffect } from "react";
import { Contact } from "./components/contact/contact";
import { Education } from "./components/education/education";
import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Languages } from "./components/languages/languages";
import { ProjectsMobile } from "./components/projectsMobile/projectsMobile";
import { ProjectsDesktop } from "./components/projectsDesktop/projectsDesktop";
import "./styles/home.scss";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="container">
      <Header />
      <Contact />
      <Experience />
      <Languages />
      <Education />
      {isDesktop ? <ProjectsDesktop /> : <ProjectsMobile />}
    </main>
  );
}
