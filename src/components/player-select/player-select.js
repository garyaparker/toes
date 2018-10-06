import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import players from '../../utils/players';
import './player-select.css';

class PlayerSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { players: [] };
  }

  selectPlayer(player) {
    if (this.state.players.includes(player)) {
      this.setState({ players: this.state.players.filter((p) => p !== player) });
      return;
    }

    if (this.state.players.length === 2) return;
    this.setState({ players: [...this.state.players, player] });
  }

  startGame() {
    this.props.game.startNewGame(this.state.players);
    this.props.history.push('/game/');
  }

  getSelectedPlayerClass(player) {
    return this.state.players.includes(player) ? 'selected-player' : '';
  }

  render() {
    return (
      <div className="player-select">
        <p>Select the players:</p>
        <div className="player-select-grid">
          {players.map((player) => (
            <div 
              onClick={() => this.selectPlayer(player)} 
              key={player.id}
              className={`player-square ${this.getSelectedPlayerClass(player)}`}>
              {!player.image ? player.name : (
                <img className="player-square-image" src={player.image} alt={player.name}/>
              )}
            </div>
          ))}
        </div>
        <button className="primary-button" onClick={() => this.startGame()} disabled={this.state.players.length !== 2} type="button">
          Start Game!
        </button>
      </div>
    );
  }
}

export default withRouter(inject('game')(PlayerSelect));
