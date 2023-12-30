import { useNavigate } from "react-router-dom";
import { NavBarButton } from ".";
import { routes } from "../../pages";
import "./styles/NavBar.scss";

const NavBar = () => {
    const navigate = useNavigate();

    function handleClick(route: string) {
        navigate(`/${route}`);
    };

    return (
        <div className="nav-bar-div">
            <NavBarButton
                name="Home"
                route={routes.HOME}
                handleClick={handleClick}
            />
            <NavBarButton
                name="About"
                route={routes.ABOUT}
                handleClick={handleClick}
            />
            <NavBarButton
                name="Projects"
                route={routes.PROJECTS}
                handleClick={handleClick}
            />
        </div>
    );
};

export default NavBar;
