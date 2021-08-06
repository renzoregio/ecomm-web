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

export default function play() {
  const names: string[] = ["Renzo", "Regio"];
  const ages: number[] = [23, 12];
  // const ages: Array<number> = [1,2,3]

  const random = Math.random() > 0.5 ? "Hello" : [1, 2];

  if (typeof random === "string") {
    const upper = random.toUpperCase();
    console.log(upper);
  } else {
    console.log(random);
  }
}
