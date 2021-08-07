// use type for type aliases
// type Data = string
// const name: Data = "Renzo" will be the same as const name: string
// or to describe function types
// type Person = {
//   name: string;
//   age: number;
// };

// TS recommends using interface over type when possible

// describes data structures in a more natural way
// describing objects - shipment, orders, etc.
// interface Person {
//   name: string;
//   age: number;
// }

// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// type functionName = (params) => return
// add ? to the variable to specify that it is optional
// type PersonLoggerFn = (name: string, age?: number) => string;

// export default function play() {
//   const name = "Renzo";
//   const age = 23;

// function logPersonInfo(personName: string, personAge: number): string {
//   const info = `Name: ${personName}, Age: ${personAge}`;
//   console.log(info);
//   return info;
// }

//   const logPersonInfo: PersonLoggerFn = (
//     personName: string,
//     personAge: number = 0
//   ): string => {
//     const info = `Name: ${personName}, Age: ${personAge}`;
//     console.log(info);
//     return info;
//   };

//   function logPersonInfo2(person: Person) {
//     const info = `Name2: ${person.name}, Age: ${person.age}`;
//     console.log(info);
//     return info;
//   }

//   const log: string = logPersonInfo(name);
//   logPersonInfo2(new Person("Gabriel", 28));
// }

// export default function play() {
//   const names: string[] = ["Renzo", "Regio"];
//   const ages: number[] = [23, 12];
//   // const ages: Array<number> = [1,2,3]

//   const random = Math.random() > 0.5 ? "Hello" : [1, 2];

//   if (typeof random === "string") {
//     const upper = random.toUpperCase();
//     console.log(upper);
//   } else {
//     console.log(random);
//   }
// }

// EXTENDING INTERFACE

// interface Person {
//   name: string;
//   age: number;
// }

// interface BusinessPerson extends Person {
//   company?: string;
//   salary: number;
// }

// interface AcademicPerson extends Person {
//   publications: string[];
// }

// export default function play() {
//   const person: Person = {
//     name: "renzo",
//     age: 23,
//   };
//   const businessMan: BusinessPerson = {
//     salary: 100,
//     name: "renzo",
//     age: 23,
//   };

//   const teacher: AcademicPerson = {
//     publications: ["hello"],
//     name: "random",
//     age: 100,
//   };
//   type logPersonFn = (person: Person) => object;

//   const logPerson: logPersonFn = (person) => {
//     console.log(person);
//     return person;
//   };

//   logPerson(person);
//   logPerson(businessMan);
//   logPerson(teacher);
// }

// EXTENDING TYPE

// type Car = {
//   brand: string;
// };

// type RaceCar = {
//   speed: number;
// } & Car;

// export default function play() {
//   const race: RaceCar = {
//     brand: "mazda",
//     speed: 100,
//   };

//   const car: Car = {
//     brand: "normal car",
//   };
// }

// UNIONS
// type RaceCar = {
//   brand: string;
//   maxSpeed: number;
// };

// type CityCar = {
//   brand: string;
//   seats: string;
// };

// export default function play() {
//   function logCarInfo(car: RaceCar | CityCar) {
//     // can only access the common key - which is brand, not maxSpeed nor seats
//     console.log(car.brand);
//   }
// }

// UNION NARROWING

// type RaceCar = {
//   brand: string;
//   team: boolean;
//   maxSpeed: 200;
// };

// type CityCar = {
//   brand: string;
//   seats: number;
//   maxSpeed: 100;
// };

// export default function play() {
//   const car1: RaceCar = {
//     brand: "Ferrari",
//     team: true,
//     maxSpeed: 200,
//   };

//   const car2: CityCar = {
//     brand: "Toyota",
//     seats: 4,
//     maxSpeed: 100,
//   };

//   function logCarInfo(car: RaceCar | CityCar) {
//     switch (car.maxSpeed) {
//       case 100:
//         console.log(`The car specified is a city car: ${car.brand}`);
//         break;
//       case 200:
//         console.log(`The car specified is a RACE car: ${car.brand}`);
//         break;
//     }
//   }

//   logCarInfo(car1);
//   logCarInfo(car2);
// }

// TYPE CASTING

// type RaceCar = {
//   brand: string;
//   team: boolean;
//   maxSpeed: 200;
// };

// type CityCar = {
//   brand: string;
//   seats: number;
//   maxSpeed: 100;
// };

// export default function play() {
//   const car1: RaceCar = {
//     brand: "Ferrari",
//     team: true,
//     maxSpeed: 200,
//   };

//   const car2: CityCar = {
//     brand: "Toyota",
//     seats: 4,
//     maxSpeed: 100,
//   };

//   function logCarInfo(car: RaceCar | CityCar) {
//     // only specified for the RaceCar class
//     // subce CityCar does not have a team attribute
//     console.log((car as RaceCar).team);
//     switch (car.maxSpeed) {
//       case 100:
//         console.log(`The car specified is a city car: ${car.brand}`);
//         break;
//       case 200:
//         console.log(`The car specified is a RACE car: ${car.brand}`);
//         break;
//     }
//   }

//   logCarInfo(car1);
//   logCarInfo(car2);
// }

// INTERFACE NARROWING
// interface Person {
//   kind: "business" | "academic";
//   name: string;
//   age: number;
// }

// interface BusinessPerson extends Person {
//   kind: "business";
//   company?: string;
//   salary: number;
// }

// interface AcademicPerson extends Person {
//   kind: "academic";
//   publications: string[];
// }

// type Human = BusinessPerson | AcademicPerson;

// const human1: BusinessPerson = {
//   name: "Renzo",
//   age: 23,
//   kind: "business",
//   salary: 100000,
//   company: "Google",
// };

// const human2: AcademicPerson = {
//   name: "Academic Person",
//   age: 1,
//   kind: "academic",
//   publications: ["Cool book"],
// };

// function logPersonInfo(human: Human) {
//   if (human.kind == "business") {
//     console.log(`I am a businessman: ${human.salary}`);
//   } else {
//     console.log(`I am an academic professor: ${human.publications}`);
//   }
// }
// logPersonInfo(human1);
// logPersonInfo(human2);

// type RaceCar = {
//   brand: string;
//   team: boolean;
//   maxSpeed: 200;
// };

// type CityCar = {
//   brand: string;
//   seats: number;
//   maxSpeed: 100;
// };

// export default function play() {
//   const car1: RaceCar = {
//     brand: "Ferrari",
//     team: true,
//     maxSpeed: 200,
//   };

//   const car2: CityCar = {
//     brand: "Toyota",
//     seats: 4,
//     maxSpeed: 100,
//   };

//   function logCarInfo(car: RaceCar | CityCar) {
//     switch (car.maxSpeed) {
//       case 100:
//         console.log(`The car specified is a city car: ${car.brand}`);
//         break;
//       case 200:
//         console.log(`The car specified is a RACE car: ${car.brand}`);
//         break;
//     }
//   }

//   logCarInfo(car1);
//   logCarInfo(car2);

//   // function printInfo(someObject: { [key: string]: any }) {

//   // }

//   function printInfo(someObject: { [key: string]: unknown }) {
//     if (typeof someObject.name === "string") {
//       console.log(someObject.name.toUpperCase());
//     }
//     // console.log(someObject.name.toUpperCase());
//   }

//   printInfo({ name: "12" });
// }

// VOID

// interface Person {
//   kind: "business" | "academic";
//   name: string;
//   age: number;
// }

// interface BusinessPerson extends Person {
//   kind: "business";
//   company?: string;
//   salary: number;
// }

// interface AcademicPerson extends Person {
//   kind: "academic";
//   publications: string[];
// }

// type noOp = () => any;
// type noOp2 = () => void;

// export default function play() {
//   function fn1(func: noOp): void {

//     const res = func();
//     since func returns any, we can do anything with the res variable and there will not be an error
//     res()
//   }

//   function fn2(func: noOp2): void {
//     const res = func();
//     If we console.log(res) it will be noting, there will be an error since func() returns void, nothing will be assigned
//     console.log(res);
//   }
// }

// CUSTOM GENERIC TYPE
// <T> specifies the type you pass on when creating the class
// in this case <T> is string
class Logger<T> {
  // we can assign it to every parameter as T which is string
  log(items: Array<T>, callback: (item: T) => void) {
    items.forEach((item) => {
      callback(item);
    });
  }
}

interface Person {
  kind: "business" | "academic";
  name: string;
  age: number;
}

interface BusinessPerson extends Person {
  kind: "business";
  company?: string;
  salary: number;
}

interface AcademicPerson extends Person {
  kind: "academic";
  publications: string[];
}
export default function play() {
  // <string> represents T on the class
  const logger = new Logger<string>();
  //   type displayFunc = (item: string) => void;
  //   const display: displayFunc = (item: string): void => {
  //     console.log(item);
  //   };
  const names = ["Renzo", "Gabriel", "Ronald"];
  //   logger.log(["Renzo", "Gabriel", "Ronald"], display);
  logger.log(names, (name) => {
    console.log(name.toUpperCase());
  });

  // we can also change it to number

  const logger2 = new Logger<number>();
  const numbers = [1, 2, 3, 4];

  logger2.log(numbers, (number) => {
    console.log((number += 10));
  });

  // for objects
  const person1: BusinessPerson = {
    kind: "business",
    salary: 1000,
    name: "Renzo",
    age: 23,
  };
  const person2: AcademicPerson = {
    kind: "academic",
    publications: ["random book"],
    name: "someone",
    age: 1,
  };

  const logger3 = new Logger<Person>();
  logger3.log([person1, person2], (person) => {
    console.log(person.name);
  });
}
