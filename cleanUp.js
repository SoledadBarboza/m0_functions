// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { console.log("Hello, what is your name?") }

askForName()

// Improved
function askForName() { 
console.log("Hello, what is your name?");
}

askForName()
// Explanation: I added the indentation and semicolon for better code readability.

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third
  return sum;
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

// Improved 
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  return sum;
}
  
addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

  // Explanation: Added semicolon (;) at the end of the 
  // "var sum = first + second + third" statement to terminate the statement properly.
  // This is considered a good practice
  // Removed extra spaces at the end of each line for improve code style.

// EX 3:
func makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();

// Improved
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();
// Explanation: 
// Change the word "func" to "function" to make the code run without errors
// Added proper indentation to the function body to enhance readability.
// Removed extra spaces at the end of each line for improve code style.


//  EX 4:
function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

return avg
  }

// Improved
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg;
}
  // Explation: 
  // Added proper indentation to the function body to enhance readability.
  // Added a semicolon (;) at the end of the return statement to terminate the statement properly.