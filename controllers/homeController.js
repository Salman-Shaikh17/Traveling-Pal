"use strict";

exports.showPopularPlaces = (req, res) => {
    res.render("popular_places");
};

exports.showOurPicks = (req, res) => {
    res.render("our_picks");
};

exports.showTipsAndTricks = (req, res) => {
    res.render("tips_and_tricks");
};

exports.showResources = (req, res) => {
    res.render("resources");
};

exports.showSignUp = (req, res) => {
    res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};

exports.logRequestPaths = (req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
};