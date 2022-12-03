import { Item } from "./item";

describe("Item", () => {
  it("has name and value", () => {
    const item = new Item("Item name", 3.5);
    expect(item.name).toEqual("Item name");
    expect(item.price).toBe(3.5);
  });
});
