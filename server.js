const express = require("express");
const path = require("path");
const http = require("http");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });