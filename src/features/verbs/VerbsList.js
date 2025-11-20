import React from 'react';
import { useSelector } from 'react-redux';
import VerbCard from './VerbCard';

const VerbsList = () => {
  const verbs = useSelector(state => state.verbs.verbs);

  return (
    <div>
    <h2 className="verbs-title">Список фразовых глаголов</h2>
     {verbs.map(verb => (
        <VerbCard key={verb.id} verb={verb} />
      ))}
    </div>
  );
};

export default VerbsList;
