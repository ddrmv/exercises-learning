import { Item } from "./item";
import { Shop } from "./shop";
describe("Shop", () => {
  it("adds item and returns its price", () => {
    const shop = new Shop();
    const itemA = new Item("A", 50);
    const itemB = new Item("B", 30);
    const itemC = new Item("C", 20);
    const itemD = new Item("D", 15);
    shop.addItem(itemA);
    shop.addItem(itemB);
    shop.addItem(itemC);
    shop.addItem(itemD);
    expect(shop.checkout("A")).toBe(50);
    expect(shop.checkout("B")).toBe(30);
    expect(shop.checkout("C")).toBe(20);
    expect(shop.checkout("D")).toBe(15);
  });

  it("returns -1 if input is empty string", () => {
    const shop = new Shop();
    expect(shop.checkout("")).toBe(-1);
  });

  it("returns -1 if input is lower case", () => {
    const shop = new Shop();
    const itemA = new Item("A", 50);
    shop.addItem(itemA);
    expect(shop.checkout("a")).toBe(-1);
  });

  it("returns total price for two items", () => {
    const shop = new Shop();
    const itemA = new Item("A", 50);
    const itemB = new Item("B", 30);
    shop.addItem(itemA);
    shop.addItem(itemB);
    expect(shop.checkout("AB")).toBe(80);
    expect(shop.checkout("AA")).toBe(100);
  });

  it("returns total price including an offer", () => {
    const shop = new Shop();
    const itemA = new Item("A", 50, true, 3, 130);
    shop.addItem(itemA);
    expect(shop.checkout("AAA")).toBe(130);
    expect(shop.checkout("AAAAAA")).toBe(260);
    expect(shop.checkout("AAAA")).toBe(180);
  });
});
