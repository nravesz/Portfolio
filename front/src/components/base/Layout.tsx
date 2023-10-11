import React, { Children } from "react";
import "./styles/Layout.scss";

type Props = {
    children: React.ReactNode;
};

const Layout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;
