import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";

const HomePage = () => {
  return (
    <div className="home-container">

      {/* БАННЕР */}
      <div className="welcome-banner">
        <h1>Добро пожаловать в тренажёр фразовых глаголов!</h1>
        <p className="subtitle">
          Учись легко, эффективно и в своём темпе.
        </p>

        <div className="actions">
          <Link to="/trainer" className="action-btn start">🔥 Начать тренировку</Link>
          <Link to="/verbs" className="action-btn verbs">📚 Изучить глаголы</Link>
          <Link to="/favorites" className="action-btn fav">⭐ Избранное</Link>
        </div>

        <img 
          className="banner-image"
          src="/images/learning-banner.png"
          alt="Learning"
        />
      </div>

      {/* С ЧЕГО НАЧАТЬ */}
      <div className="steps">
        <h2>С чего начать?</h2>

        <div className="step-list">
          <div className="step">📘 <b>Шаг 1:</b> Открой список глаголов,прослушай их и запомни</div>
          <div className="step">⭐ <b>Шаг 2:</b> Выбери трудные и добавь в избранное</div>
          <div className="step">🔥 <b>Шаг 3:</b> Запусти тренажёр и потренируйся</div>
        </div>
      </div>

      {/* ЦИТАТА */}
      <div className="quote-block">
        <p className="quote">
          “The secret of getting ahead is getting started.”
        </p>
        <p className="author">— Mark Twain</p>
      </div>

    </div>
  );
};

export default HomePage;
