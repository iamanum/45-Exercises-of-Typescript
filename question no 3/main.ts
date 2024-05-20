// 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:  string = "anum munir";

// step 1 show name in lowercase
console.log(personName.toLocaleLowerCase());

// step 2 show name in uppercase
console.log(personName.toLocaleUpperCase());

// step 3 show name in titlecase
console.log("Titlecase:", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());