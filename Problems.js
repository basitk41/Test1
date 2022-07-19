// // const arr = [];

// // for (var i = 1; i <= 10; i++) {
// //   var func = (num) => () => console.log(num);
// //   arr.push(func(i));
// //   //   arr.push(()=>console.log(i));
// // }

// // arr.forEach((el) => {
// //   el();
// // });

// ///////////////////////////////////////////////
// // checkAge(age) => age <= 12 => "child" => age >= 12 && age <= 18 => "teenager" => age >= 18 => "adult"
// // const checkAge = (age) => {
// //   return age <= 12 ? "child" : age >= 12 && age <= 18 ? "teenager" : "adult";
// // };
// // console.log(checkAge(12));

// /////////////////////////////////////////////
// // stack => FILO => OIFO
// // queue => FIFO

// // length => stack.length
// const stack = [];
// const push = (value) => {
//   stack[stack.length] = value;
// };
// const pop = () => {
//   if (stack.length === 0) return "stack is empty!";
//   const el = stack[stack.length - 1];
//   stack.length--;
//   return el;
// };
// push(1);
// push(2);
// push(3);
// console.log(stack);
// console.log(pop());
// console.log(pop());
// console.log(pop());
// console.log(pop());

// console.log(stack);

// length => stack.length
// const stack = [];
// const push = (value) => {
//   stack[stack.length] = value;
// };
// const pop = () => {
//   if (stack.length === 0) return "stack is empty!";
//   const el = stack[stack.length - 1];
//   stack.length--;
//   return el;
// };
// push(1);
// push(2);
// push(3);
// console.log(stack);
// console.log(pop());
// console.log(pop());
// console.log(pop());
// console.log(pop());
// console.log(stack);

// const input = [1, 2, 6, 3]; // original array
// const output = []; // output empty array
// for (let i = input.length - 1; i >= 0; i--) {
//   output[output.length] = input[i];
// }
// console.log(output);

// const reverseArr = (input) => {
//   const output = [];
//   for (let i = input.length - 1; i >= 0; i--) {
//     output[output.length] = input[i];
//   }
//   return output;
// };

// let queue = [];

// const push = (value) => {
//   queue[queue.length] = value;
// };

// const pop = () => {
//   if (queue.length === 0) return "queue is empty!";
//   const el = queue[0];
//   const newQueue = reverseArr(queue);
//   newQueue.length--;
//   queue = reverseArr(newQueue);
//   return el;
// };

// push(1);
// push(2);
// push(3);
// console.log(queue);
// console.log(pop());
// console.log(pop());
// console.log(pop());
// console.log(queue);
// let orignal = [1, 22, 315, 415221, 59182, 612];

// let reverse = [];
// for (let i = orignal.length - 1; i >= 0; i--) {
//   reverse[reverse.length] = orignal[i];
// }

// function queueDel() {
//   if (reverse.length === 0) {
//     return "Sorry nothing more to delete";
//   }
//   let popped = reverse[reverse.length - 1];
//   reverse.length--;
//   return popped;
// }

// console.log("Popped", queueDel());
// // console.log('reverse',reverse);
// console.log(reverse);
// let orignal_2 = [];
// for (let i = reverse.length - 1; i >= 0; i--) {
//   orignal_2[orignal_2.length] = reverse[i];
// }

// console.log(orignal_2);

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
// function findGreatest(parm) {
//   let p = -Infinity;
//   for (let i = 0; i < arr.length - 1; i++) {
//     let sum = arr[i] * arr[i + 1];
//     if (p < sum) {
//       p = sum;
//     }
//   }
//   return p;
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
//   for (let j = 1; j <= n - i; j++) {
//     string += ".";
//   }
//   for (let k = 1; k <= i; k++) {
//     string += temp;
//   }
//   temp++;
//   string += "\n";
// }
// console.log(string);
// const getStr = (curNum, n) => {
//   //   switch (curNum) {
//   //     case 1:
//   //       return "....1";
//   //     case 2:
//   //       return "...22";
//   //     case 3:
//   //       return "..333";
//   //     case 4:
//   //       return ".4444";
//   //     case 5:
//   //       return "55555";
//   //     default:
//   //       return "";
//   //   }
//   let str = "";
//   for (let i = 1; i <= n - curNum; i++) {
//     str += ".";
//   }
//   for (let j = 1; j <= curNum; j++) {
//     str += curNum;
//   }
//   return str;
// };
// let n = 5;
// let str = "";
// for (let i = 1; i <= n; i++) {
//   str += getStr(i, n);
//   str += "\n";
// }
// console.log(str);
// // ------------------------- //
// Two array combine
// Exercise 24
// function arrayCombine(ar1,ar2){
//     let combine = [];
//     let size1 = ar1.length;
//     let size2 = ar2.length;
//     for(let i=0;i<size1;i++){
//         combine[combine.length] = ar1[i];
//     }
//     for(let j=0;j<size2;j++){
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
//    string += '\n';
// }
// console.log(string);
// ----------------------------------- //
// let string2 = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5 - i; j++) {
//     string2 += "*";
//   }
//   string2 += "\n";
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
//   num = 88;
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
// x = parseInt(x);
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
//   if (speed < 75) {
//     console.log("OK");
//   } else {
//     let i = 75;
//     while (i <= speed) {
//       dirverPoints += 1;
//       if (dirverPoints >= 12) {
//         return console.log(
//           `your license is suspended your maximum points reached ${dirverPoints}`
//         );
//       }
//       i += 5;
//     }
//     console.log(`You get ${dirverPoints} points!`);
//   }
// };

// checkSpeed(120);
// __________________________________________ //
// Exercise 8
// find truthy value in array
// let arr = [false, 0, -0, "", null, undefined, "Healer", true, 2, {}];
// function countTruthy(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i]) {
//       console.log("Truthy:", array[i]);
//     }
//   }
// }
// countTruthy(arr);
// --------------------------------- //
// array rotate
// Exercise 25

// let popped,
//   userInput = 3;
// let array = [1, 2, 3, 4, 5, 6, 7];
// let newArray = [];

// function reverse(array) {
//   let tempArr = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     tempArr[tempArr.length] = array[i];
//   }
//   return tempArr;
// }

// function main(arr, n) {
//   for (let i = 0; i < n; i++) {
//     popped = arr[arr.length - 1];
//     arr.length--;
//     newArray = reverse(arr);
//     newArray[newArray.length] = popped;
//     arr = reverse(newArray);
//   }
//   return arr;
// }

// let holder = main(array, userInput);
// console.log(holder);
// ----------------------------------------------- //
// xoxoxo progoram
// Exercise 20
// let str = "kaxakakak";
// let size = str.length;
// let x = "";
// let o = "";
// function xoxoChecker(str) {
//   for (let i = 0; i < size; i++) {
//     if (str[i].toLowerCase() === "x") {
//       x += str[i];
//     } else if (str[i].toLowerCase() === "o") {
//       o += str[i];
//     }
//   }
//   if (x.length !== o.length) {
//     return false;
//   } else {
//     return true;
//   }
// }

// let call = xoxoChecker(str);
// console.log(call);
// ------------------------------------------------- //
// palindrome
// Exercise 29
// let str = "abaa",
//   reverseText = "";
// function checkPalindrome(text) {
//   let size = text.length - 1;
//   for (let i = size; i >= 0; i--) {
//     reverseText += text[i];
//   }
//   if (text === reverseText) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let call = checkPalindrome(str);
// console.log(call);
// ______________________________________________ //
// let year = 350;
// if (year <= 100) {
//   console.log(1);
// } else if (year % 100 == 0) {
//   console.log(year / 100);
// } else {
//   console.log(parseInt(year / 100) + 1);
// }
