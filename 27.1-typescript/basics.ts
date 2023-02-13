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

let person: {
  name: string;
  age: number;
};

person = {
  name: "park",
  age: 23,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference
let course = 'React - The complete Guide';
// course = 12341;