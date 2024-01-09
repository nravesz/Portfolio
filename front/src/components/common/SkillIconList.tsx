import { ISkillIcon, SkillIcon } from ".";
import "./styles/SkillIconList.scss";

type Props = {
    skillIcons: ISkillIcon[];
};

const SkillIconList = ({skillIcons}: Props) => {
    return (
        <div className="skill-icon-list">
            {skillIcons.map((icon, index) => (
                <SkillIcon key={index} skillIcon={icon} />
            ))}
        </div>
    );
};

export default SkillIconList;
