import React from "react";
import BgImageWithText from "../components/common/BgImageWithText";
import BlogImage from "../images/blog.jpg";
import "../style/pages/BlogPage.scss";

const BlogPage = () => {
    return (
        <>
            <BgImageWithText src={BlogImage} text="Blog"></BgImageWithText>
        </>
    );
};

export default BlogPage;
