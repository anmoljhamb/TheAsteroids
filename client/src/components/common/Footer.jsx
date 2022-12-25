import React from "react";
import { Link } from "react-router-dom";
import "../../style/components/Footer.scss";

const Footer = () => {
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <a href="tel:1234567890">
                        <i className="fas fa-phone"></i> +123-456-7890
                    </a>
                    <a href="tel:1112223333">
                        <i className="fas fa-phone"></i> +111-222-3333
                    </a>
                    <a href="mailto:shakhanas@gmail.com">
                        <i className="fas fa-envelope"></i>{" "}
                        talkto@theasteroids.com
                    </a>
                </div>

                <div className="box">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/explore">Explore</Link>
                </div>

                <div className="box">
                    <a href="/">
                        facebook <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/">
                        twitter <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/">
                        instagram <i className="fab fa-instagram"></i>
                    </a>
                    <a href="/">
                        linkedin <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>

            <div className="credit">
                Made With <i className="fa-solid fa-heart"></i> by Anmol Jhamb
            </div>
        </section>
    );
};

export default Footer;
