import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import MatchList from './pages/MatchList';
import PlayerSelection from './pages/PlayerSelection';
import TeamPreview from './pages/TeamPreview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/matches" element={<MatchList />} />
        <Route path="/select-players" element={<PlayerSelection />} />
        <Route path="/preview" element={<TeamPreview />} />
      </Routes>
    </Router>
  );
}

export default App;