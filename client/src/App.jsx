import React from "react";

import "./style/App.scss";
import { Routes, Route } from "react-router-dom";
/**
 * * Common Components
 **/
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
/**
 * * Pages
 **/
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ExplorePage from "./pages/ExplorePage";

const App = () => {
    /**
     * App will be the single page application of react.
     * * It will have all the different routes.
     * * App Routes the front end. i.e,
     *
     * * Pages to make
     * todo HomePage
     * todo About Page
     * todo Explore page
     * todo Blog Page
     * todo Blog Post by Id
     *
     * * Common Components
     * * Navbar
     * todo Header that has an image with parallax effect with a bunch of text on it.
     * * Footer
     * * add made with love by anmol
     *
     * ! All the other components will be separated page wise in components folder.
     * ! All the style sheets in the style folder.
     */

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/about" element={<AboutPage />}></Route>
                <Route exact path="/explore" element={<ExplorePage />}></Route>
                <Route exact path="/blog" element={<BlogPage />}></Route>
            </Routes>
            <Footer />
        </>
    );
};

export default App;
