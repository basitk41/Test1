// Exercise No 1 (swapping of two values) //
let x = 10;
let y = 20;
console.log("Before the swap");
console.log("A = ", x);
console.log("B = ", y);
[x, y] = [y, x];
console.log("After  swapping");
console.log("A = ", x);
console.log("B = ", y);

// ____________________Exercise 1 ends here__________________________//
// Exercise No 2 Calculate the area and circumference of a circle where radius is equal to 10.
// Area of circle
// Formula is A = pi x r^2
let A; // variable to denote Area
A = Math.PI * Math.pow(10, 2);
console.log("The area of a circle = ", A);
// Now to find the circumference we know the formula is
// C = 2 x pi x r
let C = 2 * Math.PI * 10;
console.log("The Circumference of a circle = ", C);
// ______________________Exercise 2 ends here________________________//
// Write program for Pythagoras Theorem using Math() Exercise 3
// c = sqrt (a^2 + b^2) Formula
let p = 10;
let b = 20;
let c;
c = Math.sqrt(Math.pow(10, 2) + Math.pow(20, 2));
console.log("Hypotenuse", c);
