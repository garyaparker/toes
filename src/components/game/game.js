import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import GameBoard from '../game-board/game-board';
import './game.css';

@observer
class Game extends Component {
  constructor(props) {
    super(props);
    if (!props.game.players) {
      this.pickNewPlayers();
    }
  }

  pickNewPlayers() {
    this.props.history.push('/player-select/');
  }

  statusMessage() {
    const { game } = this.props;

    if (game.draw) {
      return 'It\'s a tie!';
    }

    if (game.winner) {
      return `${game.winner} wins!`;
    }

    return `${game.players[game.currentPlayer - 1].name}'s turn!`;
  }

  render() {
    const { game } = this.props;
    return !game.players ? null : (
      <div className="game">
        <div className="game-status-message">{this.statusMessage()}</div>
        <GameBoard />
        <div className="game-button-row">
          <button className="primary-button" type="button" onClick={() => this.pickNewPlayers()}>
            Pick New Players
          </button>
          <button className="primary-button" type="button" onClick={() => game.startNewGame(game.players)}>
            Start New Game
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(inject('game')(Game));
