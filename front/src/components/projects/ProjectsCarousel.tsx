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
    const [activate, setActivate] = useState(false);

    const getVisibleIndexes = () => {
        const totalProjects = projects.length;
        // (this % n) + n) % n
        //const fadingLeftIndex = (((currentIndex - 2) % totalProjects) + totalProjects) % totalProjects;
        const leftIndex = (((currentIndex - 1) % totalProjects) + totalProjects) % totalProjects;
        const middleIndex = currentIndex;
        const rightIndex = (((currentIndex + 1) % totalProjects) + totalProjects) % totalProjects;
        //const fadingRightIndex = (((currentIndex + 2) % totalProjects) + totalProjects) % totalProjects;
        //return [fadingLeftIndex, leftIndex, middleIndex, rightIndex, fadingRightIndex];
        return [leftIndex, middleIndex, rightIndex];

    };

    const handleRightClick = () => {
        const totalProjects = projects.length;
        setCurrentIndex((((currentIndex + 1) % totalProjects) + totalProjects) % totalProjects);
        setActivate(true);
    };

    const handleLeftClick = () => {
        const totalProjects = projects.length;
        setCurrentIndex((((currentIndex - 1) % totalProjects) + totalProjects) % totalProjects);
        setActivate(true);
    }

    ///className={`carousel-item ${selectedItem === i ? 'selected' : ''}`}

    return(
        <div className="project-carousel-div">
            {getVisibleIndexes().map((index, i) => (
                (i === 0 ? (
                    <div
                        key={index}
                        className={`project-carousel-item ${activate ? 'left' : ''}`}
                        // onTransitionEnd={() => setActivate(false)}
                        onClick={() => handleLeftClick()}
                    >
                        {projects[index].name}
                    </div>
                ) : i === 1 ?(
                    <div
                    key={index}
                    className={`project-carousel-item middle`}
                >
                    {projects[index].name}
                </div>
                ) : (
                    <div
                        key={index}
                        className={`project-carousel-item ${activate ? 'right' : ''}`}
                        // onTransitionEnd={() => setActivate(false)}
                        onClick={() => handleRightClick()}
                    >
                        {projects[index].name}
                    </div>
                ))
            ))}
            {/* <div
                key={0}
                className={`project-carousel-item ${activate === true ? "left" : ""}`}
                onClick={() => handleLeftClick()}
                onTransitionEnd={() => console.log("termino")}
            >
                {projects[getVisibleIndexes()[0]].name}
            </div>

            <div
                key={1}
                className={`project-carousel-item middle`}
            >
                {projects[getVisibleIndexes()[1]].name}
            </div>

            <div
                key={2}
                className={`project-carousel-item ${activate === true ? "right" : ""}`}
                onClick={() => handleRightClick()}
                onTransitionEnd={() => console.log("termino")}
            >
                {projects[getVisibleIndexes()[2]].name}
            </div> */}
        </div>
    )
};

export default ProjectsCarousel;
