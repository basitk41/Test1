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
// ____________________________________ //
// let arr = [3, 6, -2, -5, 7, 3];
// function findGreatest(parm)  {
//     let p = -Infinty;
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

// ____________________________________ //

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
// ------------------------- //

function arrayCombine(ar1,ar2){
    let combine = [];
    let size1 = ar1.length-1;
    let size2 = ar2.length-1;
    for(let i=0;i<=size1;i++){
        combine[combine.length] = ar1[i];
    }
    
    for(let j=0;j<=size2;j++){
        combine[combine.length] = ar2[j];
    }
    return combine;
}
const call = arrayCombine([1,2,3],[4,5,6]);

console.log(call);
