class Person {
  name = "";
  age = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(this.name);
  }
}

class Sangriaz extends Person {
  edu = "";
  constructor(name, age, edu) {
    super(name, age);
    this.edu = edu;
  }
  sayEdu() {
    console.log(this.edu);
  }
}

const test = new Sangriaz("Sang", 20, "BSCS");

test.sayEdu();
