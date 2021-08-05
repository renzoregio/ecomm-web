// type Person = {
//   name: string;
//   age: number;
// };

interface Person {
  name: string;
  age: number;
}

export default function play() {
  const name = "Renzo";
  const age = 23;

  const person: Person = {
    name: "Renzo",
    age: 23,
  };

  function logPersonInfo(personName: string, personAge: number) {
    const info = `Name: ${personName}, Age: ${personAge}`;
    console.log(info);
    return info;
  }

  function logPersonInfo2(person: Person) {
    const info = `Name2: ${person.name}, Age: ${person.age}`;
    console.log(info);
    return info;
  }

  logPersonInfo(name, age);
  logPersonInfo2(person);
}
