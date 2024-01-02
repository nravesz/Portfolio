import React from "react";
import "./styles/Layout.scss";

type Props = {
    children: React.ReactNode;
};

const Layout = ({children}: Props) => {
    return (
        <div className='layout-div'>
            <div className="layout-base"/>
            <div className='layout-animated'/>
            <div className="content">{children}</div>
        </div>
    );
};

export default Layout;
