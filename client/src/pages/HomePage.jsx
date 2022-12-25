import React from "react";
import HomeImage from "../images/homeImage.jpg";
import "../style/pages/HomePage.scss";
import BgImagWithText from "../components/common/BgImageWithText";

const HomePage = () => {
    return (
        <>
            <BgImagWithText src={HomeImage} text="Home" />
        </>
    );
};

export default HomePage;
