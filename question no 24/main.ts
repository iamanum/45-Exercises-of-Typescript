// 24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
// Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

//Tests for equality and inequality with strings
const string1: string = "Apple";
const string2: string = "Banana";
console.log(string1===string2); // False strings are not equal
console.log(string1 !==string2) //! use b/c not

//Tests using the lower case function
const mixedCaseString: string = "HelloWorld";
console.log(mixedCaseString.toLowerCase()==="helloworld");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number = 10;
const num2: number = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);

//Tests using "and" and "or" operators
const conditon1: boolean = true;
const conditon2: boolean = false;
console.log(conditon1 && conditon2);
console.log(conditon1 || conditon2);

//Test whether an item is in a array
const Fruits: string[] = ["Apple", "Banana", "Stawberry", "Mango"];
console.log(Fruits);
// Test whether an item is not in a array
console.log(Fruits.includes ("apple"))