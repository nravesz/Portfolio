import CV from "../../data/Raveszani CV.pdf";
import "./styles/CVButton.scss";

const CVButton = () => {
    const handleClick = () => {
        window.open(CV, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="cv-button"
        >
            <div className="cv-button-text">Check my CV!</div>
            
        </button>
    );
};

export default CVButton;
