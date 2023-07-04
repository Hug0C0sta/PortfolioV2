import React from "react";
import "./contact.scss";
import { Git } from "../icons/git";
import { Insta } from "../icons/insta";
import { LinkedIn } from "../icons/linkedin";
import { Twitter } from "../icons/twitter";
import { Mail } from "../icons/mail";

export const Contact = () => {
  return (
    <div className="contact">
      <div>
        <a href="https://github.com/HugoHugo">
          <Git />
        </a>
        <a href="https://github.com/HugoHugo">
          <Insta />
        </a>
        <a href="https://github.com/HugoHugo">
          <LinkedIn />
        </a>
        <a href="https://github.com/HugoHugo">
          <Twitter />
        </a>
      </div>
      <button>
        CONTACT ME <Mail />
      </button>
    </div>
  );
};
