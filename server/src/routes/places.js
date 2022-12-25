/**
 * Contains the routes for places.
 */

const express = require("express");
const router = express.Router();
const Place = require("../../db/models/Place");

router.get("/", async (req, res) => {
    try {
        const places = await Place.find().exec();
        res.status(200).json(places);
    } catch (err) {
        res.status(500).json({
            message: "There was an error while fetching places",
            err,
        });
    }
});

module.exports = router;
