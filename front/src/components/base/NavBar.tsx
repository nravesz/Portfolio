import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    function handleClick(route: string) {
        navigate(`/${route}`);
    };

    return (
        <div>
            <button onClick={() => handleClick("home")}>
                Home
            </button>
            <button onClick={() => handleClick("contact")}>
                Contact
            </button>
        </div>
    );
};

export default NavBar;