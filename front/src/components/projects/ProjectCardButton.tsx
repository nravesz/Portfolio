import React, { ReactNode } from "react";
import "./styles/ProjectCardButton.scss";

type Props = {
    title: string,
    icon: ReactNode
}

const ProjectCardButton = ({title, icon}: Props) => {
    return (
        <button className="project-card-button">
            <div className="project-card-button-title">{ title }</div>
            {icon}
        </button>
    );
};

export default ProjectCardButton;
