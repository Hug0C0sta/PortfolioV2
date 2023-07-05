'use client';
import React, {useEffect, useRef, useState} from "react";
import "./languages.scss";

export const Languages = () => {
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
        <div className="languages hidden" ref={myRef}>
            <h3>Languages</h3>
            <p>🇵🇹 PT Native Speaker</p>
            <p>🇬🇧 EN Fluent</p>
            <p>🇪🇸 ES Fluent</p>
        </div>
    );
};
