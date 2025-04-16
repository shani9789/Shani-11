import React from 'react';
import { Link } from 'react-router-dom';

const MatchList = () => (
  <div>
    <h2>Upcoming Matches</h2>
    <ul>
      <li>
        Match 1 - <Link to="/select-players">Select Players</Link>
      </li>
    </ul>
  </div>
);

export default MatchList;