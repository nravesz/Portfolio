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
    const [test1, setTest1] = useState("");
    const [test2, setTest2] = useState("");

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
                    className={`project-carousel-item  ${indexList === 0 ? 'left' : indexList === 2 ? 'right' : 'middle'}`}
                    onClick={() => {
                        const [ left, middle, right ] = getVisibleIndexes();
                        if (index === left) {
                            handleLeftClick();
                        } else if (index === right) {
                            handleRightClick();
                        };
                    }}
                    style={{ transform: `translateX(${(indexList - 1) * 100}%)` }}
                >
                    {indexList}
                </div>
            ))}
            {/* <div
                className={`test  ${test1 === "left" ? 'left' : test1 === "right" ? 'right' : ''}`}
                onClick={() => {
                    if (test1 === "") {
                        setTest1("left");
                    } else if (test1 === "left") {
                        setTest1("right");
                    } else {
                        setTest1("");
                    }
                }}
            >Project 1</div>
            <div
                            className={`test  ${test2 === "left" ? 'left' : test2 === "right" ? 'right' : ''}`}
                            onClick={() => {
                                if (test2 === "") {
                                    setTest2("left");
                                } else if (test2 === "left") {
                                    setTest2("right");
                                } else {
                                    setTest2("");
                                }
                            }}
            >Project 2</div> */}
        </div>
    )
};

export default ProjectsCarousel;
