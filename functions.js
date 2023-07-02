// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting.
function greeting(){
    return "Hello! How are you today?";
}
var greetingMessage = greeting();
console.log(greetingMessage);


// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name) {
    return "Hello! " + name + ". " + "How are you doing?";
}
var customGreetingMessage = customGreeting("Pinwino");
console.log(customGreetingMessage);

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(firstName, middleName, lastName ) {
    return "Hello, " + firstName + " " + middleName + " " + lastName + "."
}
var greetingSentence = greetPerson("Maria", "Florencia", "Guzmán");
console.log(greetingSentence);

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(number) {
    return number * number;
}
var squareNumber = square(5);
console.log("The square of 5 is: " + squareNumber + ".");

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(quantity, item) {
if (quantity > 0) {
if (quantity >= 4) {
console.log(item + "is stocked");
} else {
    console.log(item + "- running LOW");
}
} else {
    console.log(item + "- OUT of stock!");
}
}

console.log(checkStock(4, "Coffee"));
console.log(checkStock(3, "Tortillas"));
console.log(checkStock(0, "Cheese"));
console.log(checkStock(1, "Salsa"));

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"