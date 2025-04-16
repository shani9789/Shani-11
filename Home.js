import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Welcome to Shani 11</h2>
    <Link to="/matches">View Matches</Link>
  </div>
);

export default Home;