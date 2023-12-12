import { IProject } from ".";
import "./styles/ProjectCard.scss";

const name = "Project Name";
const tech = ["React", "TypeScript", "Sass"];
const description = "Lorem ipsum dolor sit amet, consecte";

type props = {
    project: IProject
};

const ProjectCard = ({ project }: props) => {
    return (
        // <div className="project-card-div" >
        //     <div className="project-card-name" > { project.name } </div>
        //     <div> { project.stack } </div>
        //     <div className="project-card-description" > { project.description } </div>
        //     <div> { project.repository } </div>
        //     <div> { project.demo } </div>
        // </div>
        <div className="project-card-div">
            <div className="project-card-name"> {project.name} </div>
            <div className="project-card-stack"> {project.stack.join(" | ")} </div>
            <div className="project-card-description"> {project.description} </div>
            <div className="project-card-links">
                <button>Repositorio</button>
                {project.hasDemo && <button> Visitar </button>}
            </div>
        </div>
    );
};

export default ProjectCard;
