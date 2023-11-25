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
    }, {  
        stack: ["TypeScript", "React", "Sass"],
        name: "Project 2",
        description: "project",
        repository: "repo",
        hasDemo: true,
        demo: "demo"
    }, {  
        stack: ["TypeScript", "React", "Sass"],
        name: "Project 3",
        description: "project",
        repository: "repo",
        hasDemo: true,
        demo: "demo"
    }, {
        stack: ["TypeScript", "React", "Sass"],
        name: "Project 4",
        description: "project",
        repository: "repo",
        hasDemo: true,
        demo: "demo"
    }
]

const ProjectsCarousel = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const handleProjectClick = (index: number) => {
        setCurrentProject(index);
      };

    return(
        <div className="project-carousel-div">
            {/* <ProjectCard project={projects[0]} />
            <ProjectCard project={projects[1]} />
            <ProjectCard project={projects[2]} /> */}
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`project-carousel-item ${index === currentProject ? 'selected' : ''}`}
                    onClick={() => handleProjectClick(index)}
                >
                <div>{project.name}</div>
                </div>
            ))}
        </div>
    )
};

export default ProjectsCarousel;
