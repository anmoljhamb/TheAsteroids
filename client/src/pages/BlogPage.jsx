import React, { useState, useMemo } from "react";
import BgImageWithText from "../components/common/BgImageWithText";
import Places from "../components/common/Places";
import BlogImage from "../images/blog.jpg";
import "../style/pages/BlogPage.scss";

const BlogPage = () => {
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
            <BgImageWithText src={BlogImage} text="Blog"></BgImageWithText>
            <section>
                <div className="blogContainer">
                    <h1>Checkout Our Blog Posts</h1>
                    <div className="posts">
                        <Places compPlaces={places}></Places>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage;
