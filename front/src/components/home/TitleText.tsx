import "./styles/TitleText.scss";

const TitleText = () => {
    return (
        <div className="title-text-div" >
            <p className= "title-text-name ">
                <span className="title-neutral">Hi, I am </span>
                <span className="title-styled">Nicole Raveszani</span>

            </p>
            <p className="title-text-rol" >A Computer Engineering<br/>Student</p>
        </div>
    );
};

export default TitleText;
