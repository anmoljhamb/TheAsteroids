import React from "react";
import HomeImage from "../images/homeImage.jpg";
import "../style/pages/HomePage.scss";
import BgImagWithText from "../components/common/BgImageWithText";
import FeaturedPlaces from "../components/HomePage/FeaturedPlaces";

const HomePage = () => {
    return (
        <>
            <BgImagWithText src={HomeImage} text="Home" />
            <FeaturedPlaces></FeaturedPlaces>
        </>
    );
};

export default HomePage;
