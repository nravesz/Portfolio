import "./styles/ProjectCardButton.scss";

type props = {
    title: string
}

const ProjectCardButton = ({title}: props) => {
    return (
        <button className="project-card-button">{ title }</button>
    );
};

export default ProjectCardButton;
