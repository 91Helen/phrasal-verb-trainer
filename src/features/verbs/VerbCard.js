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

  // --- безопасно получаем пример ---
  const exampleText =
    typeof verb.example === 'string'
      ? verb.example
      : verb.example?.text || '—';

  const toggleFavorite = () => {
    const cleanedVerb = {
      ...verb,
      example: exampleText, // теперь всегда строка
    };

    if (isFavorite) {
      dispatch(removeFavorite(verb.id));
    } else {
      dispatch(addFavorite(cleanedVerb));
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
      <h3>{verb.verb || '—'}</h3>

      <button onClick={() => speakText(verb.verb)}>Прослушать глагол</button>

      <p>
        <strong>Перевод:</strong> {verb.translation || '—'}
      </p>

      <p>
        <strong>Пример:</strong> {exampleText}
      </p>

      <button onClick={() => speakText(exampleText)}>Прослушать пример</button>

      {verb.imageUrl && (
        <div style={{ marginTop: 10 }}>
          <img
            src={verb.imageUrl}
            alt={verb.verb}
            style={{ maxWidth: '100%', borderRadius: 4 }}
          />
        </div>
      )}

      <button onClick={toggleFavorite} style={{ marginTop: 10 }}>
        {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
      </button>
    </div>
  );
};

export default VerbCard;
