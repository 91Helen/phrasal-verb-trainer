import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTotalVerbs } from './progressSlice';

const Statistics = () => {
  const dispatch = useDispatch();
  const completedVerbs = useSelector(state => state.progress.completedVerbs);
  const totalVerbs = useSelector(state => state.progress.totalVerbs);
  const lastUpdated = useSelector(state => state.progress.lastUpdated);
  const verbs = useSelector(state => state.verbs.verbs);

  useEffect(() => {
    if (verbs && verbs.length) {
      dispatch(setTotalVerbs(verbs.length));
    }
  }, [verbs, dispatch]);

  const percent = totalVerbs > 0 ? ((completedVerbs / totalVerbs) * 100).toFixed(1) : 0;

  return (
    <div>
      <h2>Статистика прогресса</h2>
      <p>Выучено глаголов: {completedVerbs} из {totalVerbs}</p>
      <p>Процент выполнения: {percent}%</p>
      {lastUpdated && <p>Последнее обновление: {new Date(lastUpdated).toLocaleString()}</p>}
    </div>
  );
};

export default Statistics;
