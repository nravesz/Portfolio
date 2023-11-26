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
    const [currentIndex, setCurrentIndex] = useState(0);

    const getVisibleIndexes = () => {
        const totalProjects = projects.length;
        // (this % n) + n) % n
        const leftIndex = (((currentIndex - 1) % totalProjects) + totalProjects) % totalProjects;
        const middleIndex = currentIndex;
        const rightIndex = (((currentIndex + 1) % totalProjects) + totalProjects) % totalProjects;
        return [leftIndex, middleIndex, rightIndex];
    };

    const handleRightClick = () => {
        const totalProjects = projects.length;
        setCurrentIndex((((currentIndex + 1) % totalProjects) + totalProjects) % totalProjects);
    };

    const handleLeftClick = () => {
        const totalProjects = projects.length;
        setCurrentIndex((((currentIndex - 1) % totalProjects) + totalProjects) % totalProjects);
    }

    return(
        <div className="project-carousel-div">
            <div
                key={getVisibleIndexes()[0]}
                className={`project-carousel-item left`}
                onClick={() => handleLeftClick()}
                onAnimationEnd={() => console.log("animation ended")}
            >
                {projects[getVisibleIndexes()[0]].name}
            </div>

            <div
                key={getVisibleIndexes()[1]}
                className={`project-carousel-item middle`}
            >
                {projects[getVisibleIndexes()[1]].name}
            </div>

            <div
                key={getVisibleIndexes()[2]}
                className={`project-carousel-item right`}
                onClick={() => handleRightClick()}
            >
                {projects[getVisibleIndexes()[2]].name}
            </div>
        </div>
    )
};

export default ProjectsCarousel;
