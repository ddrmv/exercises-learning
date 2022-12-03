import { Item } from "./item";
import { Shop } from "./shop";
describe("Shop", () => {
  it("adds item and returns price", () => {
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
  });
});
