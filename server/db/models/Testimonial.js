/**
 * * Cotains the mongoose Schema and the model for all the Testimonials our website will feature.
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const testimonialSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    profileLink: {
        type: String,
        required: true,
    },
});

module.exports = new model("Testimonial", testimonialSchema);
