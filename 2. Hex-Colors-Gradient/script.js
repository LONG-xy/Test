


// Read the body of index.html to find which ids you need
// <h2> gives you the String to change the background colour
// Add in JavaScript where needed as:
// document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;

// Make use of addEventListener
// Make use of the hex digits array below. How many hex digits do colour codes have?
// You need to generate two hex codes for every click to have a gradient background




document.getElementById("submit").addEventListener("click", () =>{display()});



display =()=>{
    
let hex_digits = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
let hexcode1 = "";
let hexcode2 = "";

for (let i = 0; i < 6; i++) {
    hex_digit_a = hex_digits[Math.floor(Math.random()*hex_digits.length)];
    hex_digit_b = hex_digits[Math.floor(Math.random()*hex_digits.length)];
    hexcode1 += hex_digit_a;
    hexcode2 += hex_digit_b;
  }

  document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;
}
