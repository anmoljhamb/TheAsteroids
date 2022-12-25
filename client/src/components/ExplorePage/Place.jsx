import React from "react";

const Place = (props) => {
    return (
        <>
            <div className="place">
                <div
                    className="placeImage"
                    style={{ backgroundImage: `url("${props.image}")` }}
                ></div>
                <div className="text">
                    <h1>{props.name}</h1>
                    <p>{props.fact}</p>
                </div>
            </div>
        </>
    );
};

export default Place;
