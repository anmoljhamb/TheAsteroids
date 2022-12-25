import React from "react";
import { useNavigate } from "react-router-dom";

const Place = (props) => {
    const navigator = useNavigate();
    const handleOnClick = () => {
        navigator(`/blog/${props.id}`);
    };

    return (
        <>
            <div className="place" onClick={handleOnClick}>
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
