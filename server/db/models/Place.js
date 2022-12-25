/**
 * * Cotains the mongoose Schema and the model for all the places our website will feature.
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const placeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    fact: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    texts: {
        type: Array,
        required: true,
    },
    featured: {
        type: Boolean,
        required: true,
    },
});

module.exports = new model("Place", placeSchema);
