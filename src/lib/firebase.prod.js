"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebase = void 0;
var app_1 = require("firebase/app");
require("firebase/firestore");
require("firebase/auth");
// 1) when seeding the database you'll have to uncomment this!
var seed_1 = require("./seed");
var config = {
    apiKey: "AIzaSyDfbl8g-77SIix8iEnaRRhENOpCUtaEXjU",
    authDomain: "netflix-clone-841d3.firebaseapp.com",
    projectId: "netflix-clone-841d3",
    storageBucket: "netflix-clone-841d3.appspot.com",
    messagingSenderId: "219739314381",
    appId: "1:219739314381:web:d94865493985b903ccf184",
    measurementId: "G-B9P06YT8WW"
};
// Initialize Firebase
var firebase = app_1.default.initializeApp(config);
exports.firebase = firebase;
// 2) when seeding the database you'll have to uncomment this!
(0, seed_1.seedDatabase)(firebase);
