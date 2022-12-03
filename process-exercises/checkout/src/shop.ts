import { Item } from "./item";
export class Shop {
  _items: Item[];
  constructor() {
    this._items = [];
  }

  addItem(item: Item) {
    this._items.push(item);
  }

  checkout(shoppingList: string) {
    return this._items[0].price;
  }
}
