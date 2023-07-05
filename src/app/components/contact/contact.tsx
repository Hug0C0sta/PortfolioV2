"use client";
import React, { useEffect, useRef } from "react";
import "./contact.scss";
import { Git } from "../icons/git";
import { Insta } from "../icons/insta";
import { LinkedIn } from "../icons/linkedin";
import { Twitter } from "../icons/twitter";
import { Mail } from "../icons/mail";

export const Contact = () => {
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
    <div className="contact hidden" ref={myRef}>
      <div className="contact__icons">
        <a href="https://github.com/Hug0C0sta" target="_blank">
          <Git />
        </a>
        <a href="https://github.com/HugoHugo" target="_blank">
          <Insta />
        </a>
        <a
          href="https://www.linkedin.com/in/hugo-costa-022a56251/"
          target="_blank"
        >
          <LinkedIn />
        </a>
        <a href="https://github.com/HugoHugo" target="_blank">
          <Twitter />
        </a>
      </div>
      <button
        onClick={() => window.location.assign("mailto:viaeshugo@gmail.com")}
      >
        CONTACT ME
        <Mail />
      </button>
    </div>
  );
};
