// class Animal {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//       this.eat = function () {
//         console.log("I am eating");
//       };
//     }
  
//     walk() {
//       console.log("I am walking");
//     }
//   }
  
//   const cat = new Animal("tom", 5);
//   const cat2 = new Animal("citty", 7);
  
//   cat.walk();
//   cat.eat();


  // -------------------------------

//   class Animal {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//       this.eat = function () {
//         console.log("I am eating");
//       };
//     }
  
//     static type = "ANIMAL";

//     static render = (el) => typeof el;
  
//     walk() {
//       console.log("I am walking");
//     }
//   }
  
//   const cat = new Animal("tom", 5);
  
//   console.log(cat);


//--------------------
//   function foo(){
//     Math.sum(4, 5)
//     Math.sub(7, 9)
//     Math.mul(4, 5)
//   }
//--------------------


// const arr = [1, 2, 3]

// arr.map((el) => {
//     console.log(el)
// });


// ----------------------------------

// class Animal {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//       this.eat = function () {
//         console.log("I am eating");
//       };
//     }
  
//     static type = "ANIMAL";
  
//     static walk = () => console.log("I am walking");
  
//     static countsum = (a, b) => a + b;
  
//     walk(a, b) {
//       console.log("I am walking");
//     }
//   }
  
//   const cat = new Animal("tom", 5);
  
//   cat.walk("sdvsv", "sdvsdv");
  
  // const arr = [1, 2, 3];
  
  // arr.map((el) => {
  //   console.log(el);
  // });
  
  // console.log(Array.isArray({}));


  // -----------------------------------

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, hasTail) {
//     super(name, age);
//     this.hasTail = hasTail;
//   }
// }

// class Bird extends Animal {
//   constructor(name, age, canFly) {
//     super(name, age);
//     this.canFly = canFly;
//   }
// }

// const cat1 = new Cat("tom", 5, true);
// const bird1 = new Bird("city", 7, true);

// console.log(cat1);


// -----------------------------

// class Animal {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
  
//   class Cat extends Animal {
//     constructor(name, age, wantMau) {
//       super(name, age);
//       this.wantMau = wantMau;
//     }
//   }
  
//   class Bird extends Animal {
//     constructor(name, age, canFly) {
//       super(name, age);
//       this.canFly = canFly;
//     }
//   }
  
//   const cat1 = new Cat("tom", 5, true);
//   const bird1 = new Bird("city", 7, true);
  
//   console.log(cat1);


//------------------------------

// class Person(name, age) ->

// class Student(gpa) < Person
// class Teacher(classSize) < Person

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     walk() {
//       console.log("I am walking");
//     }
//   }
  
//   class Student extends Person {
//     constructor(name, age, gpa) {
//       super(name, age);
//       this.gpa = gpa;
//     }
  
//     learn() {
//       console.log("I am learing");
//     }
//   }
  
//   class Teacher extends Person {
//     constructor(name, age, classSize) {
//       super(name, age);
//       this.classSize = classSize;
//     }
  
//     teach() {
//       console.log("I am teaching");
//     }
//   }
  
//   const student1 = new Student("Bob", 15, 3.8);
//   const teacher1 = new Teacher("Greg", 45, 30);

// ----------------------------
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     here() {
//       console.log("I am here");
//     }
//   }
  
//   class Student extends Person {
//     constructor(name, age, gpa) {
//       super(name, age);
//       this.gpa = gpa;
//     }
  
//     hello() {
//       super.here();
//       console.log("what's up");
//     }
//   }
  
//   class Teacher extends Person {
//     constructor(name, age, classSize) {
//       super(name, age);
//       this.classSize = classSize;
//     }
  
//     hello() {
//       super.here();
//       console.log("Hello");
//     }
//   }
  
//   const student1 = new Student("Bob", 15, 3.8);
//   const teacher1 = new Teacher("Greg", 45, 30);





  function multNumber(num) {
    return num * 2
  }

  console.log(multNumber(7));
  console.log(multNumber(84));
  console.log(multNumber(5));
  console.log(multNumber(14));
  console.log(multNumber(9));
  