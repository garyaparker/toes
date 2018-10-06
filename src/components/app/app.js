import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Game from '../game/game';
import PlayerSelect from '../player-select/player-select';
import Welcome from '../welcome/welcome';
import GameStore from '../../stores/game';
import './app.css';

class App extends Component {
  render() {
    return (
      <Provider game={new GameStore()} >
        <div className="app">
          <h1 className="app-title">Parker Family Tic-Tac-Toe</h1>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/player-select/" component={PlayerSelect} />
              <Route exact path="/game/" component={Game} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
