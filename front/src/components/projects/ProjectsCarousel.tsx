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
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
    };
  
    return (
      <div className="carousel-container">
        <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}>
          {/* Your carousel slides go here */}
          <div className={`carousel-slide`}
          >
            <div className={`item ${currentSlide == 0 ? "current" : ""}`}
            >
                Project 1
            </div>
          </div>
          <div className={`carousel-slide`}>
            <div className={`item ${currentSlide == 1 ? "current" : ""}`}>
                Project 2
            </div>
           </div>
          <div className={`carousel-slide`}>
            <div className={`item ${currentSlide == 2 ? "current" : ""}`}>
                Project 3
            </div>
          </div>
          <div className={`carousel-slide`}>
            <div className={`item ${currentSlide == 3 ? "current" : ""}`}>
                Project 4
            </div>
          </div>
          <div className={`carousel-slide`}>
            <div className={`item ${currentSlide == 4 ? "current" : ""}`}>Project 5</div>
          </div>
          {/* Add more slides as needed */}
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
