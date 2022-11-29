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

  it("returns 1 for 'a'", () => {
    const scrabble = new Scrabble("a");
    expect(scrabble.getScore()).toEqual(1);
  });
});
