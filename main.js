"use strict";

const express = require("express"),
    app = express(),
    errorController = require("./controllers/errorController"),
    homeController = require("./controllers/homeController"),
    subscribersController = require("./controllers/subscribersController"),
    layouts = require("express-ejs-layouts"),
    mongoose = require("mongoose");

    mongoose.connect("mongodb+srv://it231:winsal3@cluster0.e1xdz.mongodb.net/travelingpal_db?retryWrites=true&w=majority",
    { useNewUrlParser:true, useUnifiedTopology: true }
    );

mongoose.set("useCreateIndex", true);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(homeController.logRequestPaths);



app.get("/", (req, res) => {
    res.render("index");
});

app.get("/popular_places", homeController.showPopularPlaces);
app.get("/our_picks", homeController.showOurPicks);
app.get("/tips_and_tricks", homeController.showTipsAndTricks);
app.get("/resources", homeController.showResources);

app.get("/subscribers", subscribersController.getAllSubscribers);
app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);


app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});

