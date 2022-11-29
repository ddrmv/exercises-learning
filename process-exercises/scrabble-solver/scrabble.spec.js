const Scrabble = require("./scrabble");

describe("Scrabble", () => {
  it("returns 0 on empty string input", () => {
    const scrabble = new Scrabble("");
    expect(scrabble.getScore()).toEqual(0);
  });
});
