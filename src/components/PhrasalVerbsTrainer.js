import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import VerbsList from '../features/verbs/VerbsList';
import Favorites from '../features/favorites/Favorites';
import TrainerContainer from '../features/trainer/TrainerContainer';
import Statistics from '../features/progress/Statistics';
import Settings from '../features/settings/Settings';

const PhrasalVerbsTrainer = () => {
  return (
    <Router>
      <header>
        <nav>
          <NavLink to="/" end>Домой</NavLink> |{' '}
          <NavLink to="/verbs">Глаголы</NavLink> |{' '}
          <NavLink to="/favorites">Избранное</NavLink> |{' '}
          <NavLink to="/trainer">Тренажёр</NavLink> |{' '}
          <NavLink to="/statistics">Статистика</NavLink> |{' '}
          <NavLink to="/settings">Настройки</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<h2>Добро пожаловать в тренажёр</h2>} />
          <Route path="/verbs" element={<VerbsList />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/trainer" element={<TrainerContainer />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </Router>
  );
};

export default PhrasalVerbsTrainer;
