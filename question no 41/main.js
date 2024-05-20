"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
// Array of magician's names
let magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Calling the function to show magician's names
show_magicians(magicianNames);
