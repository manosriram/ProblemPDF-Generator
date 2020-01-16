const express = require("express");
const PORT = process.env.PORT || 5000;
const bodyparser = require("body-parser");
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.set("view engine", "ejs");
app.use("/gen", require("./Gen"));
app.get("/", (req, res) => {return res.render("Index")});

app.listen(PORT, () => console.log(`Server at ${PORT}`));

module.exports = app;
