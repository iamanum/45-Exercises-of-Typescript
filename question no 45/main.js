"use strict";
// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, modelName, ...options) {
    let carInfo = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Iterate over the options and add them to the carInfo object
    options.forEach(option => {
        const [key, value] = option;
        carInfo[key] = value;
    });
    return carInfo;
}
// Call the function with required information and additional name-value pairs
let car = storeCarInfo("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
// Print the object returned by the function
console.log(car);
