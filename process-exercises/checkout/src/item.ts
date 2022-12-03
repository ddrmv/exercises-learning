export class Item {
  _name: string;
  _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }
}
