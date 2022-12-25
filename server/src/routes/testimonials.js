/**
 * Contains the routes for testimonials.
 */

const express = require("express");
const router = express.Router();
const Testimonial = require("../../db/models/Testimonial");

const errorResponse = (res, err, code = 400) => {
    res.status(code).json({
        message: "There was an error while fetching testimonials",
        err,
    });
};

router.get("/", async (req, res) => {
    try {
        const testimonials = await Testimonial.find().exec();
        res.status(200).json({ testimonials });
    } catch (err) {
        errorResponse(res, err, 500);
    }
});

router.post("/", async (req, res) => {
    try {
        const testimonial = new Testimonial(req.body.testimonial);
        await testimonial.save();
        res.status(200).json(testimonial);
    } catch (err) {
        errorResponse(res, err);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id).exec();

        // console.log(testimonial);
        console.log(req.body.testimonial);
        testimonial.set({ ...req.body.testimonial });
        await testimonial.save();
        console.log(testimonial);
        res.status(200).json(testimonial);
    } catch (err) {
        errorResponse(res, err);
    }
});

router.delete("/:id", async (req, res) => {
    const data = await Testimonial.findById(req.params.id).exec();
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
