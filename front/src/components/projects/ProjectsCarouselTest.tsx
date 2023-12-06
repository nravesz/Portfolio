import { useState } from "react";
import { ProjectCard, IProject } from ".";
import "./styles/ProjectCarouselTest.scss";

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

const ProjectsCarouselTest = () => {
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
            <div className="project-carousel-slides-div" style={{ transform: `translateX(${50 - currentSlide * 33.33}%)` }}>
                {projects.map((project, index) => (
                    <div 
                        className="project-carousel-slide"
                        onClick={() => handleSlideClick(index)}
                    >
                        <ProjectCard project={projects[index]} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsCarouselTest;