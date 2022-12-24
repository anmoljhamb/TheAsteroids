import React from "react";
import BgImageWithText from "../components/common/BgImageWithText";
import "../style/pages/AboutPage.scss";
import AboutBgImage from "../images/aboutBgImage.jpg";

const AboutPage = () => {
    return (
        <>
            <BgImageWithText height="50rem" src={AboutBgImage} text="About" />
        </>
    );
};

export default AboutPage;
