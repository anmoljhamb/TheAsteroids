import React from "react";
import BgImageWithText from "../components/common/BgImageWithText";
import OurStory from "../components/AboutPage/OurStory";
import AboutBgImage from "../images/aboutBgImage.jpg";
import AboutBest from "../images/about_fun_facts.jpg";
import "../style/pages/AboutPage.scss";

const AboutPage = () => {
    return (
        <>
            <BgImageWithText src={AboutBest} text="About" />
            <OurStory />
            <BgImageWithText
                src={AboutBgImage}
                text="Get The Best Experience"
            />
        </>
    );
};

export default AboutPage;
