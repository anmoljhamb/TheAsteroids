import React from "react";
import Places from "../common/Places";
import { useMemo } from "react";
import { useState } from "react";
import "../../style/components/FeaturedPlaces.scss";

const FeaturedPlaces = () => {
    const [places, setPlaces] = useState([]);

    useMemo(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URI}/place/featured`)
            .then((resp) => resp.json())
            .then((data) => {
                setPlaces(data);
                console.log(data);
            });
    }, []);

    return (
        <section>
            {/* <div className="blogContainer">
                <h1>Checkout Our Blog Posts</h1>
                <div className="posts">
                    <Places compPlaces={places}></Places>
                </div>
            </div> */}
            <div className="featured">
                <h1>Featured</h1>
                <div className="featuredPlace">
                    <Places compPlaces={places}></Places>
                </div>
            </div>
        </section>
    );
};

export default FeaturedPlaces;
