const Scrabble = require("./scrabble");

describe("Scrabble", () => {
  it("returns 0 for empty string, space, tab, newline", () => {
    const scrabble1 = new Scrabble("");
    const scrabble2 = new Scrabble(" \t\n");
    const scrabble3 = new Scrabble(null);
    expect(scrabble1.getScore()).toEqual(0);
    expect(scrabble2.getScore()).toEqual(0);
    expect(scrabble3.getScore()).toEqual(0);
  });

  it("returns 1 for 'a' or 'e'", () => {
    const scrabble1 = new Scrabble("a");
    const scrabble2 = new Scrabble("e");
    expect(scrabble1.getScore()).toEqual(1);
    expect(scrabble2.getScore()).toEqual(1);
  });

  it("returns correct value for one-letter d/b/f/k/j/q", () => {
    const scrabble1 = new Scrabble("d");
    const scrabble2 = new Scrabble("b");
    const scrabble3 = new Scrabble("f");
    const scrabble4 = new Scrabble("k");
    const scrabble5 = new Scrabble("j");
    const scrabble6 = new Scrabble("q");
    expect(scrabble1.getScore()).toEqual(2);
    expect(scrabble2.getScore()).toEqual(3);
    expect(scrabble3.getScore()).toEqual(4);
    expect(scrabble4.getScore()).toEqual(5);
    expect(scrabble5.getScore()).toEqual(8);
    expect(scrabble6.getScore()).toEqual(10);
  });

  it("returns 6 for street", () => {
    const scrabble1 = new Scrabble("street");
    expect(scrabble1.getScore()).toEqual(6);
  });
});
