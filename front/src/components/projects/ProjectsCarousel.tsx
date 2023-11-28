import { useState } from "react";
import { ProjectCard, IProject } from ".";
import "./styles/ProjectsCarousel.scss";

const projects: IProject[] = [
    {  
        stack: ["TypeScript", "React", "Sass"],
        name: "Project 1",
        description: "project",
        repository: "repo",
        hasDemo: true,
        demo: "demo"
    },
    {  
        stack: ["TypeScript", "React", "Sass"],
        name: "Project 2",
        description: "project",
        repository: "repo",
        hasDemo: true,
        demo: "demo"
    },
    {  
        stack: ["TypeScript", "React", "Sass"],
        name: "Project 3",
        description: "project",
        repository: "repo",
        hasDemo: true,
        demo: "demo"
    },
    {
        stack: ["TypeScript", "React", "Sass"],
        name: "Project 4",
        description: "project",
        repository: "repo",
        hasDemo: true,
        demo: "demo"
    }
];

const ProjectsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + projects.length) % projects.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`carousel-slide ${currentSlide === index ? "current" : ""}`}
            style={{ transform: `scale(${currentSlide === index ? 1.5 : 1})` }}
          >
            <div className="item">
              {/* Project content goes here */}
              {project.name}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button" onClick={prevSlide}>
        Prev
      </button>
      <button className="carousel-button" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default ProjectsCarousel;