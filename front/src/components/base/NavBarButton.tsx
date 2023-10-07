import React from "react";
import { FaHome } from "react-icons/fa";
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
            <FaHome className="nav-bar-icon" />
            <div className="nav-bar-text">{name}</div>
        </button>
    )
};

export default NavBarButton;
