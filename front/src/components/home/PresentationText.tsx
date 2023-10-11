import "./styles/PresentationText.scss";

const PresentationText = () => {
    return (
        <div>
            <p className="greetings-text"> Hi! </p>
            <p className="name-text"> I'm Nicole Raveszani </p>
            <div>
                {/* <p className="stack-text"> A Full Stack Developer </p>
                <p className="stack-text"> A Full Stack Developer </p> */}
                <div className="glitch-text-div">
                    <div className="glitch-text-1"> A Full Stack Developer </div>
                    <div className="glitch-text-2"> A Full Stack Developer </div>
                    <div className="glitch-text-3"> A Full Stack Developer </div>
                </div>
            </div>
        </div>
    );
};

export default PresentationText;
