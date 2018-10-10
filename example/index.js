"use strict";

const slugly = require("../lib");

// Simple usage
console.log(slugly("Hello World"));

// Using Romanian diacritics
console.log(slugly("Salutări din București!"));

// Using special characters
console.log(slugly("I ♥ You!"));

// Long dashes
console.log(slugly("2016 — What a year!"));

// Add a new character to the charmap
slugly.charmap["😂"] = "joy"
console.log(slugly("I am full of 😂"));
