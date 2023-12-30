import { IProject, ProjectsCarousel } from ".";
import "./styles/Projects.scss";
import "../../styles/common.scss";
import { Divider } from "../common";


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
        <div>
            <div className="general-div">
                <div className='title'> Projects </div>
                <Divider />
            </div>
        <ProjectsCarousel />
        </div>
    );
};

export default Projects;
