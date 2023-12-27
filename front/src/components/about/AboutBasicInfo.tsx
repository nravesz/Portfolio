
import "./styles/AboutBasicInfo.scss";
import potrait from "../../assets/me.jpg";

const AboutBasicInfo = () => {
    return (
        <div className="about-basic-info-div">
            <img className="about-basic-info-image" src={potrait}/>
            <div>Nicole Raveszani</div>
            <div>Computer Engineering Student</div>
        </div>
    );
};

export default AboutBasicInfo;
