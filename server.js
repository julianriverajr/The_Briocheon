const express = require("express");
const path = require("path");
const http = require("http");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
});
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/reserve.html"));
});
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/tables.html"));
});

app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

app.get("/api/reservations/:reservation", function (req, res) {
    var chosen = req.params.reservation;

    console.log(chosen);

    for (var i = 0; i < reservations.length; i++) {
        if (chosen === reservations[i].routeName) {
            return res.json(reservations[i]);
        }
    }

    return res.json(false);
});

// Create New Reservations - takes in JSON input
app.post("/api/reservations", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    // Using a RegEx Pattern to remove spaces from newReservation
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    characters.push(newReservation);

    res.json(newReservation);
});



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});