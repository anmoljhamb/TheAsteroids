/**
 * * Routes for the contact us page.
 */

const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
    var transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    var mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL_RECV,
        subject: "Contact - TheAsteroids",
        text: `
        Response From Contact Form.
        Name: ${req.body.contact.name}
        Email: ${req.body.contact.email}
        Phone: ${req.body.contact.phone}
        Message: ${req.body.contact.message}
        `,
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            res.status(500).json({
                message: "There was an error while contacting the owner.",
                err,
            });
        } else {
            console.log("Email sent: " + info.response);
            res.status(200).json(info.response);
        }
    });
});

module.exports = router;
