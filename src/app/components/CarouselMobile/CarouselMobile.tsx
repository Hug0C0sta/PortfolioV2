"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./carousel.scss";

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

export const CarouselMobile = () => {
  const [emblaRef] = useEmblaCarousel();

  const [viewportRef, embla] = useEmblaCarousel({
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<Array<number>>([]);

  const scrollTo = React.useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const data = [1, 2];

  const onSelect = React.useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  React.useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {projects.map((project) => (
              <div className="embla__slide" key={project.title}>
                <img
                  src={project.image}
                  alt="tets"
                  onClick={() => openLink(project.link)}
                />
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="embla__navigator">
        {scrollSnaps.map((_, index) => (
          <div
            className="embla__dots"
            key={index}
            style={{
              backgroundColor: selectedIndex === index ? "orangered" : "grey",
            }}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselMobile;
