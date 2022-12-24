import React from "react";
import "../../style/components/BgImageWithText.scss";

const BgImageWithText = (props) => {
    return (
        <section>
            <div className="container">
                <div
                    className="bgImage"
                    style={{
                        height: props.height,
                        backgroundImage: `url(${props.src})`,
                    }}
                >
                    <h1 className="imageText">{props.text}</h1>
                </div>
            </div>
        </section>
    );
};

export default BgImageWithText;
