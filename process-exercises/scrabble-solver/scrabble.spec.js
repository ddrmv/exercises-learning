const Scrabble = require("./scrabble");

describe("Scrabble", () => {
  const scrabble = new Scrabble("");
  expect(scrabble.score).toEqual(0);
});
