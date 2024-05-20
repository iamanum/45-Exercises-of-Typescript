"use strict";
// 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "anum munir";
// step 1 show name in lowercase
console.log(personName.toLocaleLowerCase());
// step 2 show name in uppercase
console.log(personName.toLocaleUpperCase());
// step 3 show name in titlecase
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLocaleLowerCase() + " ";
}
;
console.log(titlecaseName);
