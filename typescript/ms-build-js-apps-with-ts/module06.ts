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

function identity1<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}
let returnNumber = identity1<number, string>(100, "Hello!");
returnNumber = returnNumber * 100; // OK

////////
// using generic constraints to limit types
// using type guards with generics
////////

type ValidTypes = string | number;
function identity<T extends ValidTypes, U>(value: T, message: U) {
  let result: ValidTypes = "";
  let typeValue: string = typeof value;
  if (typeof value === "number") {
    result = value + value;
  } else if (typeof value === "number") {
    result = value + value;
  }
  console.log(
    `The message is ${message} and the function returns a ${typeValue} value of ${result}`
  );
  return result;
}
let numberValue = identity<number, string>(100, "Hello");
let stringValue = identity<string, string>("100", "Hello");
// typeof can only be used to type guard to check primitive types:
// string, number, bigint, function, boolean, symbol, object and undefined
// use "instanceof" for checking type of a class

function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key];
}
let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };
console.log(getPets(pets1, "fish")); // Returns 6
// console.log(getPets(pets2, "3"));     // Error

///////////////
// implement generics with custom types and classes
///////////////
class Car1 {
  make: string = "Generic Car";
  doors: number = 4;
}
class ElectricCar1 {
  make: string = "Electric Car";
  doors: number = 4;
}
class Truck1 {
  make: string = "Truck";
  doors: number = 2;
}
function accelerate<T extends Car1>(car: T): T {
  console.log(`All ${car.doors} doors are closed.`);
  console.log(`The ${car.make} is now accelerating!`);
  return car;
}
let myElectricCar1 = new ElectricCar1();
accelerate<ElectricCar1>(myElectricCar1);
let myTruck1 = new Truck1();
accelerate<Truck1>(myTruck1);

//////////////
// lab
//////////////
class DataStore<T> {
  private _data: Array<T> = new Array(10);

  AddOrUpdate(index: number, item: T) {
    if (index >= 0 && index < 10) {
      this._data[index] = item;
    } else {
      alert("Index is greater than 10");
    }
  }
  GetData(index: number) {
    if (index >= 0 && index < 10) {
      return this._data[index];
    } else {
      return;
    }
  }
}
let empIDs = new DataStore<number>();
empIDs.AddOrUpdate(0, 50);
empIDs.AddOrUpdate(1, 65);
empIDs.AddOrUpdate(2, 89);
console.log(empIDs.GetData(0));

type Pets = {
  name: string;
  breed: string;
  age: number;
};
let pets = new DataStore<Pets>();
pets.AddOrUpdate(0, { name: "Rex", breed: "Golden Retriever", age: 5 });
pets.AddOrUpdate(1, { name: "Sparky", breed: "Jack Russell Terrier", age: 3 });
console.log(pets.GetData(0));
