import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/pages/BlogPost.scss";

const Blog = () => {
    const params = useParams();
    const [place, setPlace] = useState({
        name: "",
        images: [],
        fact: "",
        texts: [],
    });

    useMemo(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URI}/place/${params.blogId}`)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                setPlace(data.place);
            });
    }, [params.blogId]);

    return (
        <section>
            <div className="blogPost">
                <h1>{place.name}</h1>
                {place.texts.map((text, index) => {
                    const image = place.images[index];
                    if (image) {
                        return (
                            <div className="blogContent">
                                <div className="contentImage">
                                    <img src={image} alt="" />
                                </div>
                                <div className="contentText">{text}</div>
                            </div>
                        );
                    } else {
                        return (
                            <div className="blogContent">
                                <div className="contentText">{text}</div>
                            </div>
                        );
                    }
                })}
            </div>
        </section>
    );
};

export default Blog;
