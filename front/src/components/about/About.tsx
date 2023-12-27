import { AboutBasicInfo, AboutDescription } from ".";
import "../../styles/common.scss";
import "./styles/About.scss";

const About = () => {
    return (
        <div className="general-div">
            <div className="title"> About </div>
            <div className="about-div">
                <div className="about-div basic-info">
                    <AboutBasicInfo />
                </div>
                <div className="about-div descrption">
                    <AboutDescription />
                </div>
            </div>
        </div>
    );
};

export default About;
