"use strict";
// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
function make_great(magicians) {
    return magicians.map(magician => "the Great " + magician);
}
// Array of magician's names
let magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Calling make_great() to modify the magician names
let greatMagicians = make_great(magicianNames);
// Printing the modified magician names
show_magicians(greatMagicians);
