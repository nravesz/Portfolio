import { useState } from "react";
import { ProjectCard, IProject } from ".";
import "./styles/ProjectCarouselTest.scss";

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const projects: IProject[] = [
    {  
        stack: ["TypeScript", "React", "Sass"],
        name: "Monitor de Criptomonedas",
        description: description + "\n\n" + description + "\n\n" + description,
        repository: "repo",
        hasDemo: true,
        demo: "demo"
    },
    {  
        stack: ["TypeScript", "React", "Sass"],
        name: "Manager de personajes de Genshin Impact",
        description: description,
        repository: "repo",
        hasDemo: false,
        demo: "demo"
    },
    {  
        stack: ["TypeScript", "React", "Sass"],
        name: "Project 3",
        description: description,
        repository: "repo",
        hasDemo: true,
        demo: "demo"
    },
    {
        stack: ["TypeScript", "React", "Sass"],
        name: "Project 4",
        description: description,
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
            <div className="project-carousel-slides-div" style={{ transform: `translateX(${50 - currentSlide * (100/3)}%)` }}>
                {projects.map((project, index) => (
                    // <div
                    //     key={index}
                    //     className={`project-carousel-slide ${currentSlide === index ? "current" : ""}`}
                    //     onClick={() => handleSlideClick(index)}
                    // >
                    //     <ProjectCard project={projects[index]} />
                    // </div>
                    <div
                        key={index}
                        className={`project-carousel-slide ${index === currentSlide ? "current" : ""}
                        ${index === currentSlide + 1 || index === currentSlide - 1 ? "sides" : ""}`}
                        onClick={() => handleSlideClick(index)}
                    >
                        <ProjectCard project={projects[index]} />
                    </div>
                    // (index === currentSlide) ? (
                    //     <div
                    //     key={index}
                    //     className={`project-carousel-slide ${"current"}`}
                    //     onClick={() => handleSlideClick(index)}
                    //     >
                    //         <ProjectCard project={projects[index]} />
                    //     </div>
                    // ) : index === currentSlide + 1 || index === currentSlide - 1 ? (
                    //     <div
                    //         key={index}
                    //         className={`project-carousel-slide ${"sides"}`}
                    //         onClick={() => handleSlideClick(index)}
                    //     >
                    //         <ProjectCard project={projects[index]} />
                    //     </div>
                    // ) : (
                    //     <div
                    //         key={index}
                    //         className={`project-carousel-slide ${""}`}
                    //         onClick={() => handleSlideClick(index)}
                    //     >
                    //         <ProjectCard project={projects[index]} />
                    //      </div>
                    // )))
                ))}
            </div>
        </div>
    );
};

export default ProjectsCarouselTest;