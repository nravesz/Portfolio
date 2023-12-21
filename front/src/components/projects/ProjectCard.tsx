import { IProject, ProjectCardButton } from ".";
import { FaGithub, FaGlobe } from "react-icons/fa6";
import "./styles/ProjectCard.scss";

const name = "Project Name";
const tech = ["React", "TypeScript", "Sass"];
const description = "Lorem ipsum dolor sit amet, consecte";

type props = {
    project: IProject
};

const ProjectCard = ({ project }: props) => {
    return (
        <div className="project-card-div">
            <div className="project-card-name"> {project.name} </div>
            <div className="project-card-stack-div">
                <div className="project-card-stack-title"> Stack </div>
                <div className="project-card-stack"> {project.stack.join(" | ")} </div>
            </div>
            <div className="project-card-description"> {project.description} </div>
            <div className="project-card-links">
                <ProjectCardButton
                    title="Repository"
                    icon={<FaGithub/>}
                />
                {project.hasDemo && <ProjectCardButton
                    title="Visit"
                    icon={<FaGlobe/>}
                />}
            </div>
        </div>
    );
};

export default ProjectCard;
