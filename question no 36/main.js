"use strict";
// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log(`The size of the shirt is ${size} and it says "${message}".`);
}
// Calling the function with examples
make_shirt('Medium', 'Coding is cool!');
make_shirt('Large', 'Hello, World!');
