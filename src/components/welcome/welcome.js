import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div className="welcome">
    <p>Welcome to the Parker's Tic-Tac-Toe.</p>
    <Link className="primary-button" to="/player-select/">Select Your Players</Link>
  </div>
);

export default Welcome;
