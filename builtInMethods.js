// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");
// The includes() method is called on the string "Hello World"
// Arguments are passed; "Hello"
// Includes() must determine whether an array includes a given "Hello" element, and return true or false accordingly.
// The return value is "true"

"Hello World".endsWith("Hello");
// The endsWith() method is called on the string "Hello World"
// Arguments are passed; "Hello"
// endsWith () must determines whether a text string ends with the characters of a given string, returning true or false
// The return value is "false"

"Hello World".endsWith("rld");
// The endsWith() method is called on the string "Hello World"
// Arguments are passed; "rld"
// endsWith () must determines whether a text string ends with the characters of a given string, returning true or false
// The return value is "true"




// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));


// The repeat() method is called on the lastName variable, which stores the string object "Stanraiber". 
// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
// In this example, the return the string "Stanraiber" three times.
// The console.log() statements prints the return value of the repeat() method ("StanraiberStanraiberStanraiber") to the console.
var lastName = "Stanraiber";
console.log(lastName.repeat(3));


// The substring() method is called on the favoriteWeather variable, which stores the string object "Spring". 
// The substring() method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
// In this examples, the return value is "pri" and "ring".
var favoriteWeather = "Spring";
console.log(favoriteWeather.substring(1, 4));
console.log(favoriteWeather.substring(2));



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// Declare la variable "fruit".
// Using the array method "push".
// The "push" method adds a new element to the end of the "fruits" array.
// Output: ["apple", "banana", "orange", "grape"]
var fruits = ["apple", "banana", "orange"];
fruits.push = "grape";
console.log(fruits);

// Declare la variable "numbers".
// Using the array method "pop".
// The 'pop' method removes the last element from the 'numbers' array and returns that element.
// Output: 5
// The "numbers" array will be [1, 2, 3, 4]
var numbers = [1, 2, 3, 4, 5];
console.log(numbers.pop());


