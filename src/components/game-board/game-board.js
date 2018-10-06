import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import GameSquare from '../game-square/game-square';
import './game-board.css';

@observer
class GameBoard extends Component {
  render() {
    const { game } = this.props;
    return (
      <div className="game-board">
        { game.squares.map((square) => <GameSquare key={square.id} square={square} game={game} />)}
      </div>
    );
  }
}

export default inject('game')(GameBoard);
