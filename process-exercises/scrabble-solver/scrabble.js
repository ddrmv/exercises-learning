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
    if ("aeioulnrst".includes(letter)) {
      return 1;
    } else if ("dg".includes(letter)) {
      return 2;
    } else if ("bcmp".includes(letter)) {
      return 3;
    } else if ("fhvwy".includes(letter)) {
      return 4;
    } else if ("k".includes(letter)) {
      return 5;
    } else if ("jx".includes(letter)) {
      return 8;
    } else if ("qz".includes(letter)) {
      return 10;
    }
    return this.score;
  };
}

module.exports = Scrabble;
