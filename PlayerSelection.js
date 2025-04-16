import React from 'react';
import { Link } from 'react-router-dom';

const PlayerSelection = () => (
  <div>
    <h2>Select Your Team</h2>
    <p>[Player selection UI goes here]</p>
    <Link to="/preview">Preview Team</Link>
  </div>
);

export default PlayerSelection;