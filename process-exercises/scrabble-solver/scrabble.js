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
      this.score += 1;
    }
    if ("dg".includes(this.word)) {
      this.score += 2;
    }
    if ("bcmp".includes(this.word)) {
      this.score += 3;
    }
    if ("fhvwy".includes(this.word)) {
      this.score += 4;
    }
    if ("k".includes(this.word)) {
      this.score += 5;
    }
    if ("jx".includes(this.word)) {
      this.score += 8;
    }
    if ("qz".includes(this.word)) {
      this.score += 10;
    }
    return this.score;
  };
}

module.exports = Scrabble;
