/*
Primitives: number, string, boolean
More complex types: arrays, objects
Function types, parameters
*/

// Primitives
let age: number;
age = 12;

let uesrName: string;
uesrName = "Max";

let isInstructor: boolean;
isInstructor = true;

// More complex types
let hobbies: string[];
hobbies = ["soccer", "guitar", "music"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "park",
  age: 23,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference
// union
let course: string | number | string[] | boolean = "React - The complete Guide";
course = 12341;

// Functions & types
function add(a: number, b: number) {
  return a + b;
} // type inference -> number

function print(value: any) {
  console.log(value);
} // void


// Generic
function insterAtBeginning<T> (array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insterAtBeginning(demoArray, -1) // [-1, 1, 2, 3]



const stringArray = insterAtBeginning(['a', 'b'], '0');
stringArray[0].split(' '); 