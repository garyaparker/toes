import React, { Component } from 'react';
import { observer } from "mobx-react"
import './game-square.css';

@observer
class GameSquare extends Component {
  render () {
    const { square, game } = this.props;
    return (
      <div 
        onClick={() => game.select(square.id)}
        className="game-square">
        { !square.selectedBy ? null : (
          <img 
            className="game-square-image"
            src={game.players[square.selectedBy - 1].image} 
            alt={game.players[square.selectedBy - 1].name} />
        ) }
      </div>
    );
  }
}

export default GameSquare;
