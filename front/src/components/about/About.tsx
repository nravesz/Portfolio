import { AboutBasicInfo, AboutDescription } from ".";
import { Page } from "../common";
import "./styles/About.scss";

const About = () => {
    return (
        <Page title="About">
            <div className="about-div">
                <div className="about-div basic-info">
                    <AboutBasicInfo />
                </div>
                <div className="about-div descrption">
                    <AboutDescription />
                </div>
            </div>
        </Page>
    );
};

export default About;
