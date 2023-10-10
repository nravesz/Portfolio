import React from "react";
import "./styles/NavBarButton.scss";

type Props = {
    name: string;
    route: string;
    handleClick: (name: string) => void;
};

const NavBarButton = ({name, route, handleClick}: Props) => {
    return (
        <button
            className="nav-bar-button"
            onClick={() => handleClick(name)}
        >
            <div className="nav-bar-text">{name}</div>
        </button>
    )
};

export default NavBarButton;
