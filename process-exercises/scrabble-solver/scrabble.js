class Scrabble {
  constructor(word) {
    this.word = word;
    this.score = 0;
  }

  getScore = () => {
    if (this.word === "" || this.word == null) {
      return 0;
    }
    this.word.split("").forEach((letter) => {
      this.score += this.valueLetter(letter);
    });
    return this.score;
  };

  valueLetter = (letter) => {
    const value = {
      a: 1,
      e: 1,
      i: 1,
      o: 1,
      u: 1,
      l: 1,
      n: 1,
      r: 1,
      s: 1,
      t: 1,
      d: 2,
      g: 2,
      b: 3,
      c: 3,
      m: 3,
      p: 3,
      f: 4,
      h: 4,
      v: 4,
      w: 4,
      y: 4,
      k: 5,
      j: 8,
      x: 8,
      q: 10,
      z: 10,
    };
    return value[letter] ? value[letter] : 0;
  };
}

module.exports = Scrabble;
