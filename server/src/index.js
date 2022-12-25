const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const path = require("path");
const placeRouter = require("./routes/places");
const testimonialRouter = require("./routes/testimonials");
require("dotenv").config({ path: path.join(__dirname, "..", "config.env") });

const PORT = process.env.PORT;
console.log(PORT);

app.use(morgan("dev")); // Logging
app.use(express.json());
// app.use(
//     cors({
//         origin: process.env.FRONT_END_URI, // allow for cross origin
//     })
// );

app.use("/place", placeRouter);
app.use("/testimonial", testimonialRouter);

mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.DB_URI)
    .then(() => {
        console.log("Database Connected.");
        app.listen(PORT, () => {
            console.log(`Listening on the url http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log(
            "There was an error while connecting to the database.",
            err
        );
    });
