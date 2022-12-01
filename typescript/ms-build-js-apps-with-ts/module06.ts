//////////////
// generics
//////////////

// uses type varialbes in angle brackets < >
// also called type parameters or generic parameters
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

const w = [1, 2, 3, 4, 5];
console.log(w);
console.log(getArray(w));

let numberArray = getArray<number>([1, 2, 3, 4]);
numberArray.push(3);
// numberArray.push("This won't work");
let stringArray = getArray<string>(["a", "b"]);
stringArray.push("c");
// numberArray.push(0);

function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let returnNumber = identity<number, string>(100, "Hello!");

returnNumber = returnNumber * 100; // OK
