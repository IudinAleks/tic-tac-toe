class TicTacToe {
  constructor() {
    this.symbol = "x";
    this.sizeMatrix = 3;

    this.matrix = Array(this.sizeMatrix)
      .fill(null)
      .map((item) => Array(this.sizeMatrix).fill(null));
  }

  getCurrentPlayerSymbol() {
    return this.symbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex] === null) {
      this.matrix[rowIndex][columnIndex] = this.symbol;
      this.symbol = this.symbol === "x" ? "o" : "x";
    }
  }

  isFinished() {
    return Boolean(this.getWinner() || this.noMoreTurns());
  }

  getWinner() {
    if (
      this.matrix[0][0] !== null &&
      this.matrix[0][0] === this.matrix[1][1] &&
      this.matrix[0][0] === this.matrix[2][2]
    )
      return this.matrix[0][0];

    if (
      this.matrix[2][0] !== null &&
      this.matrix[2][0] === this.matrix[1][1] &&
      this.matrix[2][0] === this.matrix[0][2]
    )
      return this.matrix[2][0];

    for (let i = 0; i < this.sizeMatrix; i++) {
      let vertCalc = 0;
      if (
        this.matrix[i].every((item) => this.matrix[i][0] === item) &&
        this.matrix[i][0] !== null
      )
        return this.matrix[i][0];
      for (let j = 0; j < this.sizeMatrix; j++) {
        if (
          this.matrix[j][i] === this.matrix[0][i] &&
          this.matrix[0][i] !== null
        ) {
          vertCalc++;
        }
        if (vertCalc === this.sizeMatrix) return this.matrix[0][i];
      }
    }

    return null;
  }
  noMoreTurns() {
    return !this.matrix.some((item) => item.some((symb) => symb === null));
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
