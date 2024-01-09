import { AboutBasicInfo, AboutDescription } from ".";
import { Page, ISkillIcon, SkillIconList } from "../common";
import skillList from "../../data/skillList";
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
            <SkillIconList skillIcons={skillList} />
        </Page>
    );
};

export default About;
