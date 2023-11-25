import { ProjectCard, IProject, ProjectsCarousel } from ".";
import "./styles/Projects.scss";
import "../../styles/common.scss";


const project: IProject = {
    stack: ["TypeScript", "React", "Sass"],
    name: "Super duper project",
    description: "Lorem ipsum dolor sit amet, consecte",
    repository: "www.github.com",
    hasDemo: true,
    demo: "www.github.com"
};

const Projects = () => {
    return (
        <div className="general-div">
            <div className='title'> Projects </div>
            {/* <div className="projects-div">
                <ProjectCard project={project} />
                <ProjectCard project={project} />
                <ProjectCard project={project} />
                <ProjectCard project={project} />
                <ProjectCard project={project} />
                <ProjectCard project={project} />
                <ProjectCard project={project} />
            </div> */}
            <ProjectsCarousel />
        </div>
    );
};

export default Projects;
