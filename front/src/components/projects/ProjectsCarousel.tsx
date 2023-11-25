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
        console.log(totalProjects)
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
            {getVisibleIndexes().map((index, indexList) => (
                <div
                    key={indexList}
                    className={`project-carousel-item ${index === currentIndex ? "active" : ""}`}
                    onClick={() => {
                        const [ left, middle, right ] = getVisibleIndexes();
                        if (index === left) {
                            handleLeftClick();
                        } else if (index === right) {
                            handleRightClick();
                        };
                    }}
                >
                    {projects[index].name}
                </div>
            ))}
        </div>
    )
};

export default ProjectsCarousel;
