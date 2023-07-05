'use client';
import React, {useEffect, useRef, useState} from "react";
import "./contact.scss";
import {Git} from "../icons/git";
import {Insta} from "../icons/insta";
import {LinkedIn} from "../icons/linkedin";
import {Twitter} from "../icons/twitter";
import {Mail} from "../icons/mail";

export const Contact = () => {
    const myRef = useRef(null);
    const [experienceVisible, setExperienceVisible] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setExperienceVisible(entry.isIntersecting)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        })
        observer.observe(myRef.current!)
    }, [])

    return (
        <div className="contact hidden" ref={myRef}>
            <div className="contact__icons">
                <a href="https://github.com/HugoHugo">
                    <Git/>
                </a>
                <a href="https://github.com/HugoHugo">
                    <Insta/>
                </a>
                <a href="https://github.com/HugoHugo">
                    <LinkedIn/>
                </a>
                <a href="https://github.com/HugoHugo">
                    <Twitter/>
                </a>
            </div>
            <button>
                CONTACT ME <Mail/>
            </button>
        </div>
    );
};
