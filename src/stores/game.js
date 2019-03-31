import { observable, computed, action } from 'mobx';
import Square from './square';

export default class Game {
  @observable squares = [];
  @observable currentPlayer = 1;
  @observable move = 1;

  @computed
  get winner() {
    const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    if (!this.squares.length) return false;

    for (let i = 0; i < winConditions.length; i++) {
      if (this.squares[winConditions[i][0]].selectedBy && 
          this.squares[winConditions[i][0]].selectedBy === this.squares[winConditions[i][1]].selectedBy && 
          this.squares[winConditions[i][0]].selectedBy === this.squares[winConditions[i][2]].selectedBy) {
        return this.players[this.squares[winConditions[i][0]].selectedBy-1].name;
      }
    }

    return false;
  }

  @computed
  get gameOver() {
    return this.winner || this.move === 10;
  }

  @computed
  get draw() {
    return !this.winner && this.move === 10;
  }

  @action
  changeTurn() {
    this.currentPlayer = this.currentPlayer > 1 ? 1 : 2;
  }

  @action
  select(id) {
    if (this.gameOver || this.squares[id].selectedBy) return;
    this.squares[id].select(this.currentPlayer);
    this.move++;
    this.changeTurn();
  }

  @action
  startNewGame(players) {
    this.players = players;
    this.move = 1;
    this.currentPlayer = 1;
    this.squares = Array.from(Array(9).keys()).map((i) => new Square(i));
  }
}
