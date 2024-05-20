"use strict";
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
Object.defineProperty(exports, "__esModule", { value: true });
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//step 1  an index error
console.log(days[7]);
// step 2 correct the error before closing the program.
console.log(days[6]);
