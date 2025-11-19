import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, setLanguage } from './settingsSlice';

const Settings = () => {
  const theme = useSelector(state => state.settings.theme);
  const language = useSelector(state => state.settings.language);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  const changeLanguage = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <div>
      <h2>Настройки</h2>

      <div>
        <h3>Тема</h3>
        <p>Текущая тема: {theme}</p>
        <button onClick={toggleTheme}>
          Переключить тему
        </button>
      </div>

      <div>
        <h3>Язык</h3>
        <select value={language} onChange={changeLanguage}>
          <option value="en">English</option>
          <option value="ru">Русский</option>
          {/* Добавьте другие языки по необходимости */}
        </select>
      </div>
    </div>
  );
};

export default Settings;
