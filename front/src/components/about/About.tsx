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
            <div className="about-div-skills">
                <h2 className="about-skill-title">Skills</h2>
                <SkillIconList skillIcons={skillList} />
            </div>
        </Page>
    );
};

export default About;
