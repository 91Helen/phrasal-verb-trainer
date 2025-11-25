import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import VerbsList from '../features/verbs/VerbsList';
import Favorites from '../features/favorites/Favorites';
import TrainerContainer from '../features/trainer/TrainerContainer';
import Statistics from '../features/progress/Statistics';
import HomePage from '../components/HomePage';

const PhrasalVerbsTrainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Router>
      <header>
        <nav className="nav-container">
          {/* Бургер кнопка */}
          <div className="burger" onClick={toggleMenu}>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          </div>

          {/* Ссылки */}
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>Домой</NavLink>
            <NavLink to="/verbs" onClick={() => setMenuOpen(false)}>Глаголы</NavLink>
            <NavLink to="/favorites" onClick={() => setMenuOpen(false)}>Избранное</NavLink>
            <NavLink to="/trainer" onClick={() => setMenuOpen(false)}>Тренажёр</NavLink>
            <NavLink to="/statistics" onClick={() => setMenuOpen(false)}>Статистика</NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/verbs" element={<VerbsList />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/trainer" element={<TrainerContainer />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </main>
    </Router>
  );
};

export default PhrasalVerbsTrainer;
