import React from "react";
import { NavLink } from "react-router-dom";
import "../../style/components/Navbar.scss";

const Navbar = (props) => {
    return (
        <>
            <section>
                <h1 className="navbar__heading">TheAsteroids</h1>
                <div className="navbar">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/explore">Explore</NavLink>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Navbar;
