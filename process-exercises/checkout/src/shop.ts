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
    if (shoppingList.length < 1) {
      return -1;
    }
    return this.findItem(shoppingList[0]).price;
  }

  private findItem(itemName: string) {
    for (let i = 0; i < this._items.length; i++) {
      if (itemName === this._items[i].name) {
        return this._items[i];
      }
    }
    throw new Error("Item not found in inventory");
  }
}
