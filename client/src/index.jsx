import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.scss";
import { Router } from "react-router-dom";

/**
 * * <App/> Needs to be covered in <BrowserRouter></BrowserRouter>
 * * to make sure that routing works in App.jsx
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <App />
    </Router>
);
