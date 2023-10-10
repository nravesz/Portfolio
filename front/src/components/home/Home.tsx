import React from 'react';
import { PresentationText, PresentationImage } from ".";
import "./styles/Home.scss";

const Home = () => {
    return (
        <div className="home-div">
            <PresentationText />
            {/* <PresentationImage /> */}
        </div>
    );
};

export default Home;
