// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`The size of the shirt is ${size} and it says "${message}".`);
}

// Calling the function to create a large shirt with the default message
make_shirt();

// Calling the function to create a medium shirt with the default message
make_shirt('Medium');

// Calling the function to create a shirt of any size (Small in this case) with a different message
make_shirt('Small', 'Scripting the future!');