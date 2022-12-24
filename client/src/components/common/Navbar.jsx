import React from "react";
import "../../style/components/Navbar.scss";

const Navbar = () => {
    return (
        <>
            <section>
                <h1 className="navbar__heading">TheAsteroids</h1>
                <div className="navbar">
                    <ul>
                        <li>
                            <a className="active" href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Explore</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Navbar;
