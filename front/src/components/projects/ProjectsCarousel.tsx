import { useState } from "react";
import { ProjectCard, IProject } from ".";
import "./styles/ProjectCarousel.scss";

type Props = {
    projects: IProject[];
};

const ProjectsCarousel = ({projects}: Props) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
    };
    
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + projects.length) % projects.length);
    };

    const handleSlideClick = (index: number) => {
        if (index === currentSlide + 1) {
            nextSlide();
        } else if (index === currentSlide - 1) {
            prevSlide();
        };
    };

    return (
        <div className="project-carousel-div">
            <div className="project-carousel-slides-div" style={{ transform: `translateX(${50 - currentSlide * (100/3)}%)` }}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`project-carousel-slide ${index === currentSlide ? "current" : ""}
                        ${index === currentSlide + 1 || index === currentSlide - 1 ? "sides" : ""}
                        ${index === currentSlide + 2 || index === currentSlide - 2 ? "others" : ""}`}
                        onClick={() => handleSlideClick(index)}
                    >
                        <ProjectCard project={projects[index]} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsCarousel;
