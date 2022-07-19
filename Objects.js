// objects

// const person = {
//   name: "John",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
// };

// const person1 = { ...person, name: "Ali" };

// person1["age"] = 25;

// console.log(person1);
// console.log(person);

// const keys = Object.keys(person);
// const enteries = Object.values(person);
// console.log(keys);
// console.log(enteries);

// if ("age" in person) {
//   console.log("Age is a property of person");
// }
// if (person.hasOwnProperty("age")) {
//   console.log("Age is a property of person");
// }

// for (const a in person) {
//   console.log(person[a]);
// }

const obj = {
  name: "John",
  age: 30,
};

const { name, age } = obj;
console.log(name);
console.log(age);
