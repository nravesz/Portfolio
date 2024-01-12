import { CVButton } from ".";
import { ProjectCardButton } from "../projects";
import "./styles/AboutBasicInfo.scss";
import potrait from "../../assets/me.png";

const AboutBasicInfo = () => {
    return (
        <div className="about-basic-info-div">
            <img className="about-basic-info-image" src={potrait}/>
            <div className="about-basic-info-name">Nicole Raveszani</div>
            <div className="about-basic-info-title">Computer Engineering Student</div>
            <div style={{marginTop: "3vh"}}>
                <CVButton />
            </div>
        </div>
    );
};

export default AboutBasicInfo;
