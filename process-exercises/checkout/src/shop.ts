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
    let basket = new Map();

    for (let i = 0; i < shoppingList.length; i++) {
      let letter = shoppingList[i];
      if (basket.has(letter)) {
        basket.set(letter, basket.get(letter) + 1);
      } else {
        basket.set(letter, 1);
      }
    }

    for (let letter of basket.keys()) {
      let item = this.findItem(letter);
      if (item.hasOffer && item.offerNumber && item.offerPrice) {
        let timesOfferInBasket = Math.floor(
          basket.get(letter) / item.offerNumber
        );
        if (timesOfferInBasket >= 1) {
          basket.set(
            letter,
            basket.get(letter) - timesOfferInBasket * item.offerNumber
          );
          total += timesOfferInBasket * item.offerPrice;
        }
      }
      total += basket.get(letter) * item.price;
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
