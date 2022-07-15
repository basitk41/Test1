// // Exercise No 1 (swapping of two values) ///
// let x = 10;
// let y = 20;
// console.log("Before the swap");
// console.log("A = ", x);
// console.log("B = ", y);
// [x, y] = [y, x];
// console.log("After  swapping");
// console.log("A = ", x);
// console.log("B = ", y);

// // ____________________Exercise 1 ends here__________________________//
// // Exercise No 2 Calculate the area and circumference of a circle where radius is equal to 10.
// // Area of circle
// // Formula is A = pi x r^2
// let A; // variable to denote Area
// A = Math.PI * Math.pow(10, 2);
// console.log("The area of a circle = ", A);
// // Now to find the circumference we know the formula is
// // C = 2 x pi x r
// let C = 2 * Math.PI * 10;
// console.log("The Circumference of a circle = ", C);
// // ______________________Exercise 2 ends here________________________//

// // Write program for Pythagoras Theorem using Math() Exercise 3
// // c = sqrt (a^2 + b^2) Formula
// let p = 10;
// let b = 20;
// let c;
// c = Math.sqrt(Math.pow(10, 2) + Math.pow(20, 2));
// console.log("Hypotenuse", c);
// ____________________________________ //

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Exercise 27
// let arr = [3, 6, -2, -5, 7, 3];
// function findGreatest(parm)  {
//     let p = -Infinity;
//     for  (let  i  =   0 ; i < arr.length - 1; i++) {
//         let sum = arr[i] * arr[ i + 1];
//         if  ( p  < sum) {
//             p = sum;
//         }
//     }
//     return p;
// }

// let c = findGreatest(arr);
// console.log(c);

// // ____________________________________ //
// Exercise 26
// Create a nested Create a nested for loops produce the loops produce the
// let n = 5;
// let string = "";
// let temp = 1;
// for (let i = 1; i <= n; i++) {
//       for (let j = 1; j <= n - i; j++) {
//             string += ".";
//       }
//       for (let k = 0; k <   2   * i - 1; k++) {
//             string += temp;
//       }
//       temp++;
//       string += "\n";
// }
// console.log(string);
// // ------------------------- //
// Two array combine
// Exercise 24
// function arrayCombine(ar1,ar2){
//     let combine = [];
//     let size1 = ar1.length-1;
//     let size2 = ar2.length-1;
//     for(let i=0;i<=size1;i++){
//         combine[combine.length] = ar1[i];
//     }

//     for(let j=0;j<=size2;j++){
//         combine[combine.length] = ar2[j];
//     }
//     return combine;
// }
// const call = arrayCombine([1,2,3],[4,5,6]);

// console.log(call);

// ---------------------------- //
// Exercise 2.4

// let u = 1;
// let y = 1;
// let ans = Math.pow(u+y,2);
// console.log(ans);
// -----------------------------//
// write a function that takes two numbers and return the max in those
// Exercise 3
// const findMax = function(n1,n2){
//     if(n1 > n2){
//         return n1;
//     }else if(n1<n2){
//         return n2;
//     }else{
//         return 'Numbers are equal'
//     }
// };

// let call = findMax(5,2);
// console.log(call);
// -------------------------- //
// fizzbuzz algorithim
// Exercise 5
// const fizzbuzz = function(input){
//     let container;
//     if(typeof input !== 'number'){
//         return 'Not a number';
//     }else{
//         if(input % 3 === 0){
//             container =  'fizz';
//         }
//         if (input % 5 === 0) {
//             container =  'buzz'
//         }
//         if (input % 3 === 0 && input % 5 === 0) {
//             container =  'fizzbuzz';
//         }
//         if(input % 3 !== 0 && input % 5 !== 0){
//             container = 'Sorry the number is not divisible by 3 or 5';
//         }
//     }
//     return container;
// };

// let holder = fizzbuzz(15);
// console.log(holder);
// ------------------------------ //
// Exercise 7
// const showNumbers = function (limit){
//     for(let i=0;i<=limit;i++){
//         if(i % 2 === 0){
//             console.log(i,'is even');
//         } else{
//             console.log(i,'is odd');
//         }
//     }
// };

// showNumbers(10);
// ------------------------------ //
// Exercise 10
// const sum = function(limit){
//     let tempo = 0;
//     for(let i=0;i<=limit;i++){
//         if( i % 3 === 0){
//             tempo += i;
//         }
//         if( i % 5 === 0){
//             tempo += i;
//         }
//     }
//     return tempo;
// };

// let call = sum(12);
// console.log(call);
// -------------------------------- //
// Exercise 11
// let grades = [90, 90, 90];
// const calculateGrade = function (marks) {
//   let subjects = marks.length;
//   let obtainedMarks = 0;
//   let grade;
//   for (let i = 0; i < marks.length; i++) {
//     obtainedMarks += marks[i];
//   }
//   let avrg = obtainedMarks / subjects;
//   // return avrg;
//   if (avrg <= 59) {
//     grade = "F";
//   }
//   if (avrg >= 60 && avrg <= 69) {
//     grade = "D";
//   }
//   if (avrg >= 70 && avrg <= 79) {
//     grade = "C";
//   }
//   if (avrg >= 80 && avrg <= 89) {
//     grade = "B";
//   }
//   if (avrg >= 90 && avrg <= 100) {
//     grade = "A";
//   }
//   return grade;
// };

// console.log(calculateGrade(grades));

// ----------------------------- //
// Exercise 12
// let string = "";
// for (let i = 0; i < 5; i++) {
//    for (let j = 0; j <= i; j++) {
//         string += '*';
//    }
//    for (let k = 0; k <= i-1; k++) {
//         string += ' ';
//    }
//    string += '\n';
// }
// console.log(string);
// ----------------------------------- //
// let string2 = "";
// for (let i = 0; i < 5; i++) {
//    for (let j = 0; j < 5-i; j++) {
//         string2 += '*';
//    }
//    for (let k = 0; k < i; k++) {
//         string2 += ' ';
//    }
//    string2 += '\n';
// }

// console.log(string2);
// -----------------------------//
// Calculate mass of earth
// Exercise 2.3
// M=gR2/G Formula
// g = 9.8
// r = 6.37 * 10 ^ 6
// G =  6.673 * 10 ^ -11

// let massOfEarth;
// const g = 9.8;
// const r = 6.37*Math.pow(10,6);
// const G = 6.673*Math.pow(10,-11);
// massOfEarth = g*Math.pow(r,2)/G;
// console.log(massOfEarth);

// ---------------------------------------- //
// Exercise 21
// ---------------- Used Recursive function for the first time
// let size,
//   temp = 0,
//   num = 9999999999999;
// function single(params) {
//   params = params.toString();
//   size = params.length;
//   temp = 0;
//   for (let i = 0; i < size; i++) {
//     temp = temp + parseInt(params[i]);
//   }
//   temp = temp.toString();
//   size = temp.length;
//   if (size > 1) {
//     single(temp);
//   }
//   return temp;
// }

// let x = single(num);
// console.log(x);
// --------------------------- //
// Exercise 23
// Reverse and array or a string
// let myArray = [1,2,3];
// let rev = [];
// const size  = myArray.length-1;
// for(let i=size;i>=0;i--){
//     rev[rev.length] = myArray[i];
// }
// console.log('Orignal Array:',myArray);
// console.log('Reversed:',rev);

// for string
// let str = 'HEALER';
// let rev_str = '';
// let strSize = str.length-1;
// for(let i=strSize;i>=0;i--){
//     rev_str += str[i];
// }
// console.log('Orignal Array:',str);
// console.log('Reversed:',rev_str);
// -------------------------- //
// Exercise 4
// landscape function
// const isLandscape = function (width, height) {
//   if (width > height) {
//     return true;
//   }
//   return false;
// };

// let result = isLandscape(50, 10);
// console.log(result);
// --------------------------------- //
// Exercise 6
// checkspeed
// let dirverPoints = 0;
// const checkSpeed = function (speed) {
//   if (speed <= 70) {
//     console.log("OK");
//   }
//   if (speed > 70) {
//     let i = 75;
//     while (i <= speed) {
//       dirverPoints += 1;
//       if (dirverPoints >= 12) {
//         return `your license is suspended your maximum points reached ${dirverPoints}`;
//       }
//       i += 5;
//     }
//   }
//   return dirverPoints;
// };

// let holder = checkSpeed(130);
// console.log(holder);
