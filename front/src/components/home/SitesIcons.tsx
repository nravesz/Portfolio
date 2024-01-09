import { ISiteIcon, SiteIcon } from ".";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import "./styles/SitesIcons.scss";


const SitesIcons = () => {
    const icons: ISiteIcon[]  = [
        {
            name: "GitHub",
            url: "https://github.com/nravesz",
            color: "black",
            icon: <FaGithub />
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/nicole-raveszani-622759219/",
            color: "#0077b5",
            icon: <FaLinkedin />
        },
        {
            name: "Email",
            url: "mailto:nraveszani@gmail.com",
            color: "#a84c4a",
            icon: <SiGmail />
        }
    ];

    return (
        <div className="sites-icons-div">
            {icons.map((icon: ISiteIcon, index) => {
                return (
                    <SiteIcon
                        key={index}
                        data={icon}
                    />
                );
            })}
        </div>
    );
};

export default SitesIcons;
