// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => "the Great " + magician);
}

// Array of magician's names
let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Making a copy of the original array
let originalMagicians: string[] = magicianNames.slice();

// Calling make_great() with a copy of the original array
let greatMagicians: string[] = make_great(originalMagicians);

// Printing the original array of magician names
console.log("Original Magicians:");
show_magicians(magicianNames);

// Printing the modified array of magician names with "the Great" added
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);