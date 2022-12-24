import React from "react";
import Navbar from "./components/common/Navbar";
import "./style/App.scss";

function App() {
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
     * todo Navbar
     * todo Header that has an image with parallax effect with a bunch of text on it.
     * todo Footer
     * todo add made with love by anmol
     *
     * ! All the other components will be separated page wise in components folder.
     * ! All the style sheets in the style folder.
     */

    return (
        <>
            <Navbar />
        </>
    );
}

export default App;
