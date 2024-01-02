import React from "react";
import "./styles/Layout.scss";

type Props = {
    children: React.ReactNode;
};

const Layout = ({children}: Props) => {
    return (
        <div className='layout-div'>
            {children}
        </div>
    );
};

export default Layout;
