import { AboutBasicInfo, AboutDescription } from ".";
import { Divider } from "../common";
import "../../styles/common.scss";
import "./styles/About.scss";

const About = () => {
    return (
        <div className="general-div">
            <div className="title"> About </div>
            <Divider />
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
