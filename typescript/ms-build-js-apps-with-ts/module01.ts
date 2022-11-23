function addNumbers(x: number, y: number) {
  return x + y;
}

///////////
// TYPES
///////////

let any;

let flag: boolean;
let yes = true;
let no = false;

let x: number;
let y: 0;
let z: number = 123.456;
// let big: bigint = 100n; // only available since ES2020

// strings
let s: string;
let empty = "";
let abc = "abc";

let firstName1: string = "Bob";
let sentence: string = `My name is ${firstName1}. I am new to TS.`;

// enum types
enum ContractStatus {
  // Permanent = 1, // to start at 1, starts at 0 otherwise
  Permanent,
  Temp,
  Apprentice,
}
let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(ContractStatus[employeeStatus]); // to display Temp

// any
let randomValue: any = 1;
randomValue = true; // OK
randomValue = "Name"; // OK

// unknown
let unknownValue: unknown = 1;
unknownValue = "Name"; // OK
unknownValue = true; // OK

// the three below raise errors
// console.log(unknownValue.name);
// unknownValue();
// unknownValue.toUpperCase();

// type assertion - similar to type cast, "Trust me, I know what I'm doing"
// only used by the compiler, to conversions or extra checking
(randomValue as string).toUpperCase(); // preferred, to avoid issues in JSX, etc
(<string>randomValue).toUpperCase();

// type guard
if (typeof randomValue === "string") {
  console.log((randomValue as string).toUpperCase()); // Returns NAME
} else {
  console.log("Error - string was expected"); // Returns an error
}

// type guards
// typeof s === "string";
// typeof n === "number";
// typeof b === "boolean";
// typeof undefined === "undefined";
// typeof f === "function";
// Array.isArray(a);

// union types
let multiType: number | boolean; // can be either

// intersection types
interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
  employeeID: 11223,
  age: 34,
  stockPlan: true,
};

// literal types, literal narrowing
type TestResult = "pass" | "fail" | "incomplete";
let myResult: TestResult;
myResult = "incomplete";

// collection types (objects types are all class, interface, array, and literal types)
// arrays (the two below are equivalent)
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
// tuples (variableName: [type, type, ...])
let person1: [string, number] = ["Name", 33];
