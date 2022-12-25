/**
 * Contains the routes for places.
 */

const express = require("express");
const router = express.Router();
const Place = require("../../db/models/Place");

router.get("/", async (req, res) => {
    try {
        const places = await Place.find().exec();
        res.status(200).json({ places });
    } catch (err) {
        res.status(500).json({
            message: "There was an error while fetching places",
            err,
        });
    }
});

router.get("/featured", async (req, res) => {
    try {
        const places = await Place.find({ featured: true }).exec();
        res.status(200).json(places);
    } catch (err) {
        res.status(400).json({
            message: "There was an error while fetching places",
            err,
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const place = new Place(req.body.place);
        await place.save();
        res.status(200).json(place);
    } catch (err) {
        res.status(400).json({
            message: "Bad Request. Please check the data once again.",
            err,
        });
    }
});

router.delete("/:id", async (req, res) => {
    const data = await Place.findById(req.params.id).exec();
    console.log(data);

    try {
        await data.remove();
        res.status(200).json({
            message: "Delete was successful.",
        });
    } catch (err) {
        res.status(400).json({
            message: "There was an error while deleting the record.",
            err,
        });
    }
});

module.exports = router;
