"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestArr = ["Saman", "Maheen", "Shiza", "Haris"];
let canNotAttend = "Haris";
let newGuest = "Munir";
//step 1 : print statement to the end of your program informing people that you found a bigger dinner table.
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map((item) => (console.log(`Dear ${item}, I found a bigger Dinner Table.`)));
//step 2 : Add one new guest to the beginning of your array.
let gueustBegin = "Umaima";
guestArr.unshift(gueustBegin);
console.log(guestArr);
//step 3: Add one new guest to the middle of your array. 
let middleGuest = "Areeba";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
// step 4:  Use append() to add one new guest to the end of your list. 
guestArr.push("Maira");
console.log(guestArr);
//step 5 :  Print a new set of invitation messages, one for each person in your list.
guestArr.map((item) => (console.log(`Dear ${item}, You are Cordinally invited to a Dinner`)));
