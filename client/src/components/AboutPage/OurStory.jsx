import React from "react";
import AboutImage from "../../images/about-img.jpg";

const OurStory = () => {
    return (
        <section>
            <div className="our_story">
                <div className="text">
                    <h3>Our Story</h3>
                </div>
                <div className="container">
                    <div className="left">
                        <img src={AboutImage} alt="" />
                    </div>
                    <div className="right">
                        <h3>All About Us</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dicta voluptates suscipit mollitia dolorum
                            omnis minus veniam quia esse aut nesciunt?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cum tempora similique debitis? Quis illo ipsa
                            maxime ratione cumque quibusdam quia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
