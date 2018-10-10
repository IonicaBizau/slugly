"use strict";

const slugIt = require("../lib");

// Simple usage
console.log(slugIt("Hello World"));

// Using Romanian diacritics
console.log(slugIt("Salutări din București!"));

// Using special characters
console.log(slugIt("I ♥ You!"));

// Long dashes
console.log(slugIt("2016 — What a year!"));

// Add a new character to the charmap
slugIt.charmap["😂"] = "joy"
console.log(slugIt("I am full of 😂"));
