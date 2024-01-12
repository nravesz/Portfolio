import { SitesIcons } from ".";
import "./styles/Links.scss";

const Links = () => {
    return (
        <div>
            <div className="links-div">
                <p className="text-p">You can find me here:</p>
                <SitesIcons />
            </div>
                <p className="text-p">
                    Or you can send me an email:{" "}
                    <span>nraveszani@gmail.com</span>
                </p>
        </div>
    );
};

export default Links;
