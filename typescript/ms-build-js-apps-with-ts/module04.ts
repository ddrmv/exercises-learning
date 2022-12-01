///////////////
// Functions
///////////////

// function keyword - hoists the function (no need to declare before being used)
// fat arrow functions - 1-line can use concise syntax (omit curly brace, return)

// sum in TS
let total = (input: number[]): number => {
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
};
console.log(total([1, 2, 3]));

// exercise
function displayAlert(message: string): void {
  // alert("The message is " + message);
}
console.log(displayAlert("Click!"));

function sum(input: number[]): number {
  let total: number = 0;
  for (let count = 0; count < input.length; count++) {
    if (isNaN(input[count])) {
      continue;
    }
    total += Number(input[count]);
  }
  return total;
}
console.log(sum([1, 2, 3, 4, 5]));

////////////////////////////////////////////////////////
// optional params, default params, rest params
// optional and default params need to come after any required ones
// ellipsis (...) tells the compiler to build an array and assign it to the varname
////////////////////////////////////////////////////////

const addTwoNumbers = (x: number, y?: number): number => {
  if (y === undefined) {
    return x;
  } else {
    return x + y;
  }
};

const addAllNumbers = (
  firstNumber: number,
  ...restOfNumbers: number[]
): number => {
  let total: number = firstNumber;
  for (let i = 0; i < restOfNumbers.length; i++) {
    if (isNaN(restOfNumbers[i])) {
      continue;
    }
    total += Number(restOfNumbers[i]);
  }
  return total;
};

////////////////////////////
// deconstructed parameters
////////////////////////////

interface Message {
  text: string;
  sender: string;
}

const displayMessage = ({ text, sender }: Message): void => {
  console.log(`Message from ${sender}: ${text}`);
};
displayMessage({ sender: "Bob", text: "Ello world" });

/////////////////
// exercise
/////////////////

let addThreeNumbers = (x: number, y: number, z?: number): number => {
  if (z === undefined) {
    return x + y;
  } else {
    return x + y + z;
  }
};
addThreeNumbers(10, 20);

///////////////////////////////////
// defining function types
///////////////////////////////////

// with type aliases or with interfaces
// type calculator = (x: number, y: number) => number;
interface Calculator {
  (x: number, y: number): number;
}

let addXY: Calculator = (x: number, y: number) => x + y;
let subtractXY: Calculator = (x: number, y: number) => x - y;

let doDalculation = (operation: "add" | "subtract"): Calculator => {
  if (operation === "add") {
    return addXY;
  } else {
    return subtractXY;
  }
};
console.log(addXY(1, 2));
console.log(subtractXY(1, 2));

// function type inference - names don't need to match, types can be omitted
// for typescript the below are all the same
// let addXY: Calculator = (x: number, y: number): number => x + y;
// let addXY: Calculator = (number1: number, number2: number): number =>
//   number1 + number2;
// let addXY: Caltulator = (num1, num2) => num1 + num2;

////////////////
// lab
////////////////

type compareFunctionType = (a: number, b: number) => number;

const sortDescending: compareFunctionType = (a, b) => {
  if (a > b) {
    return -1;
  } else if (b > a) {
    return 1;
  } else {
    return 0;
  }
};

const sortAscending: compareFunctionType = (a, b) => {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
};

function buildArray(
  items: number,
  sortOrder: "ascending" | "descending"
): number[] {
  let randomNumbers = [];
  let nextNumber;
  for (let counter = 0; counter < items; counter++) {
    nextNumber = Math.ceil(Math.random() * (100 - 1));
    if (randomNumbers.indexOf(nextNumber) === -1) {
      randomNumbers.push(nextNumber);
    } else {
      counter--;
    }
  }
  if (sortOrder === "ascending") {
    return randomNumbers.sort(sortAscending);
  } else {
    return randomNumbers.sort(sortDescending);
  }
}

let myArray1 = buildArray(12, "ascending");
let myArray2 = buildArray(8, "descending");

console.log(myArray1, myArray2);

// exercise 2
function loanCalculator(
  principle: number,
  interestRate: number,
  months = 12
): string {
  let interest = interestRate / 1200; // Calculates the monthly interest rate
  let payment;
  payment = (principle * interest) / (1 - Math.pow(1 / (1 + interest), months));
  return payment.toFixed(2);
}
let myLoan = loanCalculator(1000, 5);
console.log(myLoan);
