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

  it("throws error if item not in inventory", () => {
    const shop = new Shop();
    expect(() => {
      shop.checkout("A");
    }).toThrow("Item not found in inventory");
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
});
