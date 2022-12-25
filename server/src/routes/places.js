/**
 * Contains the routes for places.
 */

const express = require("express");
const router = express.Router();
const Place = require("../../db/models/Place");

const errorResponse = (res, err, code = 400) => {
    res.status(code).json({
        message: "There was an error while fetching places",
        err,
    });
};

router.get("/", async (req, res) => {
    try {
        const places = await Place.find().exec();
        res.status(200).json({ places });
    } catch (err) {
        errorResponse(res, err, 500);
    }
});

router.get("/featured", async (req, res) => {
    try {
        const places = await Place.find({ featured: true }).exec();
        res.status(200).json(places);
    } catch (err) {
        errorResponse(res, err);
    }
});

router.post("/", async (req, res) => {
    try {
        const place = new Place(req.body.place);
        await place.save();
        res.status(200).json(place);
    } catch (err) {
        errorResponse(res, err);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const place = await Place.findById(req.params.id).exec();

        // console.log(place);
        console.log(req.body.place);
        place.set({ ...req.body.place });
        await place.save();
        console.log(place);
        res.status(200).json(place);
    } catch (err) {
        errorResponse(res, err);
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
        errorResponse(res, err);
    }
});

module.exports = router;
