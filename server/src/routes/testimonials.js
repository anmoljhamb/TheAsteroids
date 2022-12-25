/**
 * Contains the routes for testimonials.
 */

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        message: "Working Properly.",
    });
});

module.exports = router;
