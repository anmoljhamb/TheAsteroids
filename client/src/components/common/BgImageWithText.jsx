import React from "react";
import "../../style/components/BgImageWithText.scss";

const BgImageWithText = (props) => {
    return (
        <section>
            <div className="container">
                <div
                    className="bgImage"
                    style={{
                        backgroundImage: `url(${props.src})`,
                    }}
                >
                    <h1 className="imageText">{props.text}</h1>
                    {props.children}
                </div>
            </div>
        </section>
    );
};

export default BgImageWithText;
