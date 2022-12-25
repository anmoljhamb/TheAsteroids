import React, { useMemo, useState } from "react";
import BgImageWithText from "../components/common/BgImageWithText";
import Places from "../components/common/Places";
import ExploreImage from "../images/explore.jpg";
import "../style/pages/ExplorePage.scss";

const ExplorePage = () => {
    const [places, setPlaces] = useState([]);

    useMemo(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URI}/place`).then((resp) => {
            resp.json().then((data) => {
                setPlaces(data.places);
            });
        });
    }, []);

    return (
        <>
            <BgImageWithText
                src={ExploreImage}
                text="Explore"
            ></BgImageWithText>
            <section>
                <div className="places">
                    <Places compPlaces={places}></Places>
                </div>
            </section>
        </>
    );
};

export default ExplorePage;
