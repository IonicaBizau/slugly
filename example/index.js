"use strict";

import slugly from "../lib/index.js";
import { CHARMAP } from "../lib/index.js";

// Simple usage
console.log(slugly("Hello World"));
// => hello-world

// Using Romanian diacritics
console.log(slugly("Salutări din București!"));
// => salutari-din-bucuresti

// Using special characters
console.log(slugly("I ♥ You!"));
// => i-love-you

// Long dashes
console.log(slugly("2016 — What a year!"));
// => 2016-what-a-year

// Add a new character to the charmap
CHARMAP["😂"] = "joy"
console.log(slugly("I am full of 😂"));
// => i-am-full-of-joy
