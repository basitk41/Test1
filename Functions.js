Hi();

// function declaration
// hoisting
function Hi() {
  console.log("Hi");
}

// function expression
const Hello = (args) => console.log(args);

Hello("Hello");
Hello();
