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
            While in college, I gained experience in designing and implementing solutions to 
            technological problems, and I have developed the ability to learn continuously 
            and autonomously. Additionally, I have refined my teamwork skills throughsuccessful 
            collaboration with diverse individuals, effectively organizing and planning 
            projects collaboratively to meet specified deadlines and quality requirements.
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
