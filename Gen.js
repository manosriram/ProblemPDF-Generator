const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/getps", (req, res) => {
    const {title, statement, imgsrc, constraints, In, Out, exampleIn, exampleOut, explanation, dontBreak} = req.body;
    console.log(dontBreak);
    const data = {
        title,
        imgsrc,
        statement,
        constraints,
        In,
        Out,
        exampleIn,
        exampleOut,
        explanation,
        dontBreak
    };

    return res.render("Problem", {data});
});

router.get("/", (req, res) => {
    return res.json({ routeHit: true });
});

module.exports = router;
