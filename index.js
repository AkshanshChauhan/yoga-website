const express = require("express");
const app = express();
const path = require("path");

app.use("/", express.static(path.join(__dirname, "etc")));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/home/index.html");
})

app.get("/api/location/all", (req, res) => {
    res.sendFile(__dirname + "/api/data/json/location.data.json");
})

app.get("/jquery.min", (req, res) => {
    res.sendFile(__dirname + "/node_modules/jquery/dist/jquery.min.js")
})

app.listen(1000, () => {
    console.log("server started!")
})