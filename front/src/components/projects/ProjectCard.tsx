import "./styles/ProjectCard.scss";

const name = "Project Name";
const tech = ["React", "TypeScript", "Sass"];
const description = "Lorem ipsum dolor sit amet, consecte";

const ProjectCard = () => {
    return (
        <div className="project-card-div">
            <p> { name } </p>
            <p> { tech } </p>
            <p> { description } </p>
            <p> Repository </p>
            <p> Demo </p>
        </div>
    );
};

export default ProjectCard;
