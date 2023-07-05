'use client';
import React, {useEffect, useRef, useState} from "react";
import {ExperienceLevel} from "../experienceLevel/experienceLevel";

import "./experience.scss";

const experiences = [
    {level: 90, image: "./react.png", name: "react"},
    {level: 85, image: "./js.png", name: "javascript"},
    {level: 85, image: "./html.png", name: "html"},
    {level: 85, image: "./css.png", name: "css"},
    {level: 80, image: "./flutter.png", name: "flutter"},
    {level: 80, image: "./java.png", name: "java"},
    {level: 70, image: "./ionic.png", name: "ionic"},
    {level: 65, image: "./python.png", name: "python"},
];

export const Experience = () => {
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
        <div className="experience hidden" ref={myRef}>
            <h3>Experience</h3>
            <p>
                During my degree, I was always more interested in the front-end part,
                which led to doing more work in this area. <br/>I used technologies
                like HTML, CSS, JavaScript, Ionic, Flutter and React. In addition, I
                also developed REST APIs in Java.
            </p>
            <div className="experience-charts">
                {experiences.map(({level, image, name}) => (
                    <ExperienceLevel level={level} image={image} name={name}/>
                ))}
            </div>
        </div>
    );
};
