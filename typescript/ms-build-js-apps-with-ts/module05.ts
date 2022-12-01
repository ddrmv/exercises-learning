//////////////////
// classes
//////////////////

// use accessors if you need the functionality (validation, dynamic calculation)
// properties can be public (default), private, protected (access from deriving classes)
// static property (class variable)
// subclasses, base class (superclass, parent class)

class Car implements Vehicle {
  // Properties
  private static numberOfCars = 0;
  private _make: string;
  private _color: string;
  private _doors: number;

  // Constructor
  // not required to define a parameter for every property
  // params can be required, optional, default, rest (different from JS)
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
    Car.numberOfCars++; // className.propertyName for static property
  }

  // Accessors
  get make() {
    return this._make;
  }
  set make(make) {
    this._make = make;
  }
  get color() {
    return "The color of the car is " + this._color;
  }
  set color(color) {
    this.color = color;
  }
  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }

  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is breaking.`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}.`;
  }
  protected worker(): string {
    return this._make;
  }
  public static getNumberOfCars(): number {
    return Car.numberOfCars;
  }
}

let myCar1 = new Car("Cool Car Company", "blue", 2);
console.log(myCar1.color);
// console.log(myCar1._color);

let myCar2 = new Car("Galaxy Motors", "red", 2);
let myCar3 = new Car("Galaxy Motors", "gray");
console.log(myCar3.doors);
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn("right"));
console.log(Car.getNumberOfCars());

//////////////////////////
// inheritance
//////////////////////////

class ElectricCar extends Car {
  private _range: number;

  constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors); // super needs to appear before any "this._property""
    this._range = range;
  }

  get range() {
    return this._range;
  }
  set range(range) {
    this._range = range;
  }

  brake(): string {
    return `${this.worker()} is breaking with regenerative breaking system.`;
  }

  charge() {
    console.log(this.worker() + " is charging");
  }
}

let spark = new ElectricCar("Spark Motors", "silver", 124, 2);
let eCar = new ElectricCar("Electric Car Co.", "black", 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake());

//////////////////////////////////////////////////////////
// declare an interface to ensure class shape
//////////////////////////////////////////////////////////

// describe the public-facing side of the class
interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: "left" | "right"): string;
}

//////////////////////////////////////////////////////////
// Lab - Convert three TypeScript functions to a class definition
//////////////////////////////////////////////////////////

class BuildArray {
  // TODO Define the properties
  private _items: number;
  private _sortOrder: "ascending" | "descending";
  // TODO Define the constructor
  constructor(items: number, sortOrder: "ascending" | "descending") {
    this._items = items;
    this._sortOrder = sortOrder;
  }
  // TODO Define the accessors
  get items() {
    return this._items;
  }
  set items(items) {
    this._items = items;
  }
  get sortOrder() {
    return this._sortOrder;
  }
  set sortOrder(sortOrder) {
    this._sortOrder = sortOrder;
  }
  // TODO Define the methods
  private sortDescending = (a: number, b: number) => {
    if (a > b) {
      return -1;
    } else if (b > a) {
      return 1;
    } else {
      return 0;
    }
  };

  private sortAscending = (a: number, b: number) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  };

  public buildArray(): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let counter = 0; counter < this._items; counter++) {
      nextNumber = Math.floor(Math.random() * 100);
      if (randomNumbers.indexOf(nextNumber) === -1) {
        randomNumbers.push(nextNumber);
      } else {
        counter--;
      }
    }
    if (this._sortOrder === "ascending") {
      return randomNumbers.sort(this.sortAscending);
    } else {
      return randomNumbers.sort(this.sortDescending);
    }
  }
}

/*  TODO: Instantiate the BuildArray objects. */

let testArray1 = new BuildArray(12, "ascending");
let testArray2 = new BuildArray(8, "descending");
console.log(testArray1.buildArray());
console.log(testArray2.buildArray());
