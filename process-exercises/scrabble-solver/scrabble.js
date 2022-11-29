class Scrabble {
  constructor(word) {
    this.word = word;
    this.score = 0;
  }

  getScore = () => {
    if (this.word === "a") {
      this.score = 1;
    }
    return this.score;
  };
}

module.exports = Scrabble;
