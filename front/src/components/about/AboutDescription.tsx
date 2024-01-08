import "./styles/AboutDescription.scss";
import { Link } from 'react-router-dom';
import routes from "../../pages/routes"

const AboutDescription = () => {
    return (
        <div>
            <p className="about-description-text">
                I am a student of <span>Computer Engineering</span> at the <span>University 
                of Buenos Aires</span>. I am currently in my last year of my degree.
            </p>

            <p className="about-description-text">
                In college I have learned to design and implement solutions to 
                technological problems. I have acquired the ability to learn 
                continuously and autonomously. Also to work in a team, to 
                organize myself with different people, to plan a project together 
                to be delivered on a certain date under certain quality requirements.
            </p>

            <p className="about-description-text">
                I invite you to visit the{' '}
                <Link to={`${routes.PROJECTS}`} className="link">
                    Projects
                </Link> 
                {' '}section to see some of the projects I made.
            </p>
        </div>
    );
};

export default AboutDescription;
