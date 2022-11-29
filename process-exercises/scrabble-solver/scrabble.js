class Scrabble {
  constructor(word) {
    this.word = word;
    this.score = 0;
  }

  getScore = () => {
    if (this.word === "") {
      return 0;
    }
    if ("aeioulnrst".includes(this.word)) {
      this.score = 1;
    }
    return this.score;
  };
}

module.exports = Scrabble;
