import { ISkillIcon } from ".";

type Props = {
    skillIcon: ISkillIcon
};

const SkillIcon = ({skillIcon}: Props) => {
    return (
        <div>
            <img src={skillIcon.src} />
        </div>
    );
};

export default SkillIcon;
