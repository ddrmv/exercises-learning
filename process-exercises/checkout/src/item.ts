export class Item {
  _name: string;
  _price: number;
  _hasOffer: boolean;
  _offerNumber?: number;
  _offerPrice?: number;

  constructor(
    name: string,
    price: number,
    hasOffer = false,
    offerNumber?: number,
    offerPrice?: number
  ) {
    this._name = name;
    this._price = price;
    this._hasOffer = hasOffer;
    this._offerNumber = offerNumber;
    this._offerPrice = offerPrice;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  get hasOffer() {
    return this._hasOffer;
  }

  get offerNumber() {
    return this._offerNumber;
  }

  get offerPrice() {
    return this._offerPrice;
  }
}
