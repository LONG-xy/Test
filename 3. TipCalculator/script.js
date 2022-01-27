// Read the body of index.html to find which ids you need and select them
// What is different from the previous exercises with respect to events?

// User input is giving information on the bill amount, number of people sharing and the quality of the food.
// Fill in the function calculate() that calculates the tip amount for each person and shows it at the corresponding element.

// Hint: How to get the values from the user input?


function calculate() {

}


function showTipAmount() {
  // Get the snackbar DIV (check the style.css file for more information on this element)
  let x; // Fill this in

  // Add the "show" class to DIV
  x.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
