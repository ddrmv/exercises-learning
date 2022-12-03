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
    if (!this.validateShoppingList(shoppingList)) {
      return -1;
    }
    let total = 0;
    for (let i = 0; i < shoppingList.length; i++) {
      total += this.findItem(shoppingList[i]).price;
    }
    return total;
  }

  private findItem(itemName: string) {
    for (let i = 0; i < this._items.length; i++) {
      if (itemName === this._items[i].name) {
        return this._items[i];
      }
    }
    throw new Error("Item not found");
  }

  private validateShoppingList(shoppingList: string) {
    if (shoppingList.length < 1) {
      return false;
    }
    const itemList = this.listItems();
    for (let i = 0; i < shoppingList.length; i++) {
      if (!itemList.includes(shoppingList[i])) {
        return false;
      }
    }
    return true;
  }

  private listItems() {
    let itemList = "";
    for (let i = 0; i < this._items.length; i++) {
      itemList = itemList + this._items[i].name;
    }
    return itemList;
  }
}
