'use client';
import React, {useEffect, useRef, useState} from "react";
import "./experienceLevel.scss";

interface Props {
    level: number;
    image: string;
    name: string;
}

export const ExperienceLevel = (props: Props) => {
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
        <div className="experience-level hidden" ref={myRef}>
            <img src={props.image} alt={props.name}/>
            <div className="experience-level__unit">
                {experienceVisible ? <div
                    className="experience-level__measure"
                    style={{width: `${props.level}%`}}
                ></div> : null}
            </div>
        </div>
    );
};


