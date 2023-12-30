import { Divider } from ".";
import "./styles/Page.scss";

type Props = {
    title: string;
    children: React.ReactNode;
};

const Page = ({ title, children }: Props) => {
    return (
        <div className="page-div">
            <div className="page-title">{title}</div>
            <Divider />
            { children }
        </div>
    );
};

export default Page;