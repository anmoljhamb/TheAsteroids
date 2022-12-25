import React from "react";
import Place from "../ExplorePage/Place";

const Places = ({ compPlaces }) => {
    return compPlaces.map((place) => {
        return (
            <Place
                key={place._id}
                id={place._id}
                name={place.name}
                image={place.images[0]}
                fact={place.fact}
            ></Place>
        );
    });
};
export default Places;
