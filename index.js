// const arr = [];

// for (var i = 1; i <= 10; i++) {
//   var func = (num) => () => console.log(num);
//   arr.push(func(i));
//   //   arr.push(()=>console.log(i));
// }

// arr.forEach((el) => {
//   el();
// });

///////////////////////////////////////////////
// checkAge(age) => age <= 12 => "child" => age >= 12 && age <= 18 => "teenager" => age >= 18 => "adult"
// const checkAge = (age) => {
//   return age <= 12 ? "child" : age >= 12 && age <= 18 ? "teenager" : "adult";
// };
// console.log(checkAge(12));

/////////////////////////////////////////////
// stack => FILO => OIFO
// queue => FIFO

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

const reverseArr = (input) => {
  const output = [];
  for (let i = input.length - 1; i >= 0; i--) {
    output[output.length] = input[i];
  }
  return output;
};

let queue = [];

const push = (value) => {
  queue[queue.length] = value;
};

const pop = () => {
  if (queue.length === 0) return "queue is empty!";
  const el = queue[0];
  const newQueue = reverseArr(queue);
  newQueue.length--;
  queue = reverseArr(newQueue);
  return el;
};

push(1);
push(2);
push(3);
console.log(queue);
console.log(pop());
console.log(pop());
console.log(pop());
console.log(queue);
