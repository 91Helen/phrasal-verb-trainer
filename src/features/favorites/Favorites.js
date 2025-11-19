import React from 'react';
import { useSelector } from 'react-redux';
import VerbCard from '../verbs/VerbCard';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.items);

  if (!Array.isArray(favorites) || favorites.length === 0) {
    return <div>Ваш список избранных пуст</div>;
  }

  return (
    <div>
      <h2>Избранное</h2>
      {favorites.map(verb => (
        <div key={verb.id} style={{ marginBottom: 20 }}>
          <VerbCard verb={verb} />
        </div>
      ))}
    </div>
  );
};

export default Favorites;
