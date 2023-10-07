import { useNavigate } from "react-router-dom";
import { NavBarButton } from ".";
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
                route="home"
                handleClick={handleClick}
            />
            <NavBarButton
                name="Contact"
                route="contact"
                handleClick={handleClick}
            />
        </div>
    );
};

export default NavBar;
