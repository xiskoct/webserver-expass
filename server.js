const express = require("express");
const app = express();

const hbs = require("hbs");

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + "/views/parciales");

app.use(express.static(__dirname + "/public"));

// Express HBS
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("home", {
        nombre: "Fernando",
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});