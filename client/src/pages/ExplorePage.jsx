import React, { useMemo, useState } from "react";
import BgImageWithText from "../components/common/BgImageWithText";
import Place from "../components/ExplorePage/Place";
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

    const Places = () => {
        return places.map((place) => {
            return (
                <Place
                    key={place._id}
                    name={place.name}
                    image={place.images[0]}
                    fact={place.fact}
                ></Place>
            );
        });
    };

    return (
        <>
            <BgImageWithText
                src={ExploreImage}
                text="Explore"
            ></BgImageWithText>
            <section>
                <div className="places">
                    <Places></Places>
                </div>
            </section>
        </>
    );
};

export default ExplorePage;
