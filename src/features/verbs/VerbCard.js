import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../favorites/favoritesSlice';

const VerbCard = ({ verb }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === verb.id);

  const speakText = (text) => {
    if ('speechSynthesis' in window && typeof text === 'string') {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  //  пример ---
  const exampleText =
    typeof verb.example === 'string'
      ? verb.example
      : verb.example?.text || '—';

  const toggleFavorite = () => {
    const cleanedVerb = {
      ...verb,
      example: exampleText, 
    };

    if (isFavorite) {
      dispatch(removeFavorite(verb.id));
    } else {
      dispatch(addFavorite(cleanedVerb));
    }
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: 20,
        margin: 15,
        borderRadius: 8,
        background: 'var(--card-bg)',
        color: 'var(--text-color)',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgb(0 0 0 / 0.1)',
      }}
    >
      <h3>{verb.verb || '—'}</h3>

      <button
        onClick={() => speakText(verb.verb)}
        style={{ margin: '10px 0', cursor: 'pointer' }}
      >
        Прослушать глагол
      </button>

      <p>
        <strong>Перевод:</strong> {verb.translation || '—'}
      </p>

      <p>
        <strong>Пример:</strong> {exampleText}
      </p>

      <button
        onClick={() => speakText(exampleText)}
        style={{ margin: '10px 0', cursor: 'pointer' }}
      >
        Прослушать пример
      </button>

      {verb.imageUrl && (
        <div style={{ marginTop: 10 }}>
          <img
            src={verb.imageUrl}
            alt={verb.verb}
            style={{
              width: '300px',
              maxWidth: '100%',
              borderRadius: 6,
              marginTop: 10,
            }}
          />
        </div>
      )}

      <button
        onClick={toggleFavorite}
        style={{
          marginTop: 10,
          padding: '6px 12px',
          cursor: 'pointer',
          borderRadius: 4,
          background: '#007acc',
          color: '#fff',
          border: 'none',
        }}
      >
        {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
      </button>
    </div>
  );
};

export default VerbCard;
