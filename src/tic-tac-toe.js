class TicTacToe {
  constructor() {
    this.firstSymbol = "x";
    this.secondSymbol = "o";
    this.sizeMatrix = 3;

    this.matrix = Array(this.sizeMatrix)
      .fill(null)
      .map((item) => Array(this.sizeMatrix).fill(null));
  }

  getCurrentPlayerSymbol() {
    return this.firstSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    this.matrix[rowIndex][columnIndex] === null
      ? (this.matrix[rowIndex][columnIndex] = this.firstSymbol)
      : (this.matrix[rowIndex][columnIndex] = this.secondSymbol);
  }

  isFinished() {
    // return Boolean(this.getWinner() || this.noMoreTurns());
  }

  getWinner() {
    // for (let i = 0; i < this.sizeMatrix; i++) {
    //   if (this.matrix[i].every((item) => this.matrix[0][i] === item))
    //     return this.matrix[0][i];
    //   for (let j = 0; j < this.sizeMatrix; j++) {
    //     if (this.matrix[i].every((item) => this.matrix[i][j] === item))
    //       return this.matrix[i][0];
    //   }
    // }
    // return null;
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
