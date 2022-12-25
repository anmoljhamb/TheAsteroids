import React from "react";
import BgImageWithText from "../components/common/BgImageWithText";
import BlogImage from "../images/blog.jpg";
import "../style/pages/BlogPage.scss";

const BlogPage = () => {
    return (
        <>
            <BgImageWithText src={BlogImage} text="Blog"></BgImageWithText>
            <section>
                <div className="blogContainer">
                    <h1>Checkout Our Blog Posts</h1>
                </div>
            </section>
        </>
    );
};

export default BlogPage;
