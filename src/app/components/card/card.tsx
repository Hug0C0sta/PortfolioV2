"use client";
import "./card.scss";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  image: string;
  description: string;
  tec: string;
};

// Define the prop interface for the component
interface Props {
  items: Project[];
}

export const ProjectCard = ({ items }: Props) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);
  return (
    <div className="card">
      <motion.div className="carousel" ref={carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {items.map((item: Project, index: number) => (
            <motion.div className="item" key={index}>
              <div className="teste">
                <h3>{item.title}</h3>
                <img src={item.image} alt={item.title} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
