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

type Human = BusinessPerson | AcademicPerson;

const human1: BusinessPerson = {
  name: "Renzo",
  age: 23,
  kind: "business",
  salary: 100000,
  company: "Google",
};

const human2: AcademicPerson = {
  name: "Academic Person",
  age: 1,
  kind: "academic",
  publications: ["Cool book"],
};

function logPersonInfo(human: Human) {
  if (human.kind == "business") {
    console.log(`I am a businessman: ${human.salary}`);
  } else {
    console.log(`I am an academic professor: ${human.publications}`);
  }
}
logPersonInfo(human1);
logPersonInfo(human2);

type RaceCar = {
  brand: string;
  team: boolean;
  maxSpeed: 200;
};

type CityCar = {
  brand: string;
  seats: number;
  maxSpeed: 100;
};

export default function play() {
  const car1: RaceCar = {
    brand: "Ferrari",
    team: true,
    maxSpeed: 200,
  };

  const car2: CityCar = {
    brand: "Toyota",
    seats: 4,
    maxSpeed: 100,
  };

  function logCarInfo(car: RaceCar | CityCar) {
    switch (car.maxSpeed) {
      case 100:
        console.log(`The car specified is a city car: ${car.brand}`);
        break;
      case 200:
        console.log(`The car specified is a RACE car: ${car.brand}`);
        break;
    }
  }

  logCarInfo(car1);
  logCarInfo(car2);
}
