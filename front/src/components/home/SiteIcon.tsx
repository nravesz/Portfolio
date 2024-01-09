import { ISiteIcon } from ".";
import "./styles/SiteIcon.scss"

type Props = {
    data: ISiteIcon;
}

const SiteIcon = ({data}: Props) => {
    return (
        <div className="icon-div">
                <a
                    href={data.url}
                    target="_blank"
                    rel="noreferrer"
                    className="icons"
                >
                    <div>
                        {data.icon}
                    </div>
                </a>
        </div>
    );
};

export default SiteIcon;
