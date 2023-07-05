'use client';
import "./header.scss";
import {useEffect, useRef, useState} from "react";

export const Header = () => {

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
        <div className="header hidden" ref={myRef}>
            <div>
                <h1 className="typed-out">
                    Hi, i´m Hugo! 👋
                </h1>
                <h2>Software Developer</h2>
            </div>
            <div className="header__photo_div">
                <img className="header-photo" src="./me.png" alt="Me"/>
            </div>
        </div>
    );
};
