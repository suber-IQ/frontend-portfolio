import React from "react";
import "./style.scss";
import cloud from "../../images/cloud.png";
import cloudSoft from "../../images/cloud-soft.png";
import Navigation from "./navigation-bar";
import IntroContent from "./intro-content";

const Intro = () => {
    return (
        <div className="into_section">
            <div
                className="vector_bg"
                id="parallax"
            ></div>
            <img
                src={cloud}
                alt="cloudImage"
                className="cloud"
            />
            <img
                src={cloudSoft}
                alt="cloudSoftImage"
                className="cloud_soft"
            />
            <div className="content">
              <Navigation />
              <IntroContent />
            </div>
        </div>
    );
};

export default Intro;
