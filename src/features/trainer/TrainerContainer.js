import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Trainer from './Trainer';
import {
  startTraining,
  resetTrainer,
  markCorrect,
  markIncorrect,
  nextVerb,
  prevVerb
} from './trainerSlice';
import { incrementCompleted } from '../progress/progressSlice';


const TrainerContainer = () => {
  const dispatch = useDispatch();

  const allVerbs = useSelector(state => state.verbs.verbs);
  const trainingVerbs = useSelector(state => state.trainer.trainingVerbs);
  const currentVerbIndex = useSelector(state => state.trainer.currentVerbIndex);
  const finished = useSelector(state => state.trainer.finished);
  const correctCount = useSelector(state => state.trainer.correctCount);
  const incorrectCount = useSelector(state => state.trainer.incorrectCount);

  // Запускаем тренировку
  const handleStart = () => {
    if (allVerbs.length > 0) {
      dispatch(startTraining(allVerbs));
    } else {
      alert('Нет глаголов для тренировки');
    }
  };

  // Обработка ответа пользователя
  const handleAnswer = (isCorrect, nextStep) => {
    // nextStep может быть: true / false / "prev"

    if (nextStep === "prev") {
      dispatch(prevVerb());
      return;
    }

    if (isCorrect) {
      dispatch(markCorrect());
      dispatch(incrementCompleted()); // <-- увеличиваем прогресс
    } else {
      dispatch(markIncorrect());
    }

    if (nextStep === true) {
      dispatch(nextVerb());
    }
  };

  const handleReset = () => dispatch(resetTrainer());

  // Если тренировка ещё не начата
  if (trainingVerbs.length === 0) {
    return <button onClick={handleStart}>Начать тренировку</button>;
  }

  // Если тренировка завершена
  if (finished) {
    return (
      <div>
        <h2>Тренировка окончена!</h2>
        <p>Правильных ответов: {correctCount}</p>
        <p>Неправильных ответов: {incorrectCount}</p>
        <button onClick={handleReset}>Начать заново</button>
      </div>
    );
  }

  // Основной тренажёр
  return (
    <Trainer
      verbs={trainingVerbs}
      currentIndex={currentVerbIndex}
      onAnswer={handleAnswer}
    />
  );
};

export default TrainerContainer;
