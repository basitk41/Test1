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

// let orignal = [1,22,315,415221,59182,612];

// let reverse = [];
// for(let i = orignal.length-1;i>=0;i--){
//   reverse[reverse.length] = orignal[i];
// }

// function queueDel(){
//   if(reverse.length===0){
//     return'Sorry nothing more to delete';
//   } 
//   let popped = reverse[reverse.length-1];
//   reverse.length--;
//   return popped;
// }


// console.log('Popped',queueDel());
// // console.log('reverse',reverse);
// console.log(reverse);
// let orignal_2 = [];
// for(let i = reverse.length-1;i>=0;i--){
//   orignal_2[orignal_2.length] = reverse[i];
// }

// console.log(orignal_2);
