import React from "react";
import BgImageWithText from "../components/common/BgImageWithText";
import ExploreImage from "../images/explore.jpg";
import "../style/pages/ExplorePage.scss";

const ExplorePage = () => {
    return (
        <>
            <BgImageWithText
                src={ExploreImage}
                text="Explore"
            ></BgImageWithText>
        </>
    );
};

export default ExplorePage;
