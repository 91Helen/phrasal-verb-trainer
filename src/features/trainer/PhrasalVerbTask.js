import React, { useState } from 'react';

const PhrasalVerbTask = ({ verb, onAnswer, onPrev }) => {
  const [userInput, setUserInput] = useState('');
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [warning, setWarning] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);

  const containsCyrillic = (text) => /[а-яё]/i.test(text);
  const maskedExample = verb.exampleWithGap;

  const handleCheck = () => {
    const trimmedInput = userInput.trim();

    if (!trimmedInput) {
      setWarning('Пожалуйста, введите ответ.');
      return;
    }

    if (containsCyrillic(trimmedInput)) {
      setWarning('Пожалуйста, переключитесь на английскую раскладку.');
      return;
    }

    setWarning('');
    const correct = trimmedInput.toLowerCase() === verb.verb.toLowerCase();
    setChecked(true);
    setIsCorrect(correct);

    if (correct) {
      setShowAnswer(false);
      setAttemptCount(0);
      onAnswer(true, false); // обновляем статистику, но НЕ переключаем
    } else {
      setAttemptCount(prev => prev + 1);
      onAnswer(false, false); // обновляем статистику
    }
  };

  const handleNext = () => {
    if (checked && isCorrect) {
      setUserInput('');
      setChecked(false);
      setIsCorrect(false);
      setShowAnswer(false);
      setAttemptCount(0);
      onAnswer(true, true); // переключение
    }
  };

  const handleShowAnswer = () => setShowAnswer(true);
  const handlePrevClick = () => onPrev();

  return (
    <div>
      <p><i>Вставьте правильный фразовый глагол в пропуск:</i></p>
      <p>{maskedExample}</p>

      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        disabled={checked && isCorrect}
        style={{ marginRight: 10 }}
      />

      <button onClick={handleCheck} disabled={checked && isCorrect}>
        Проверить
      </button>

      <button
        onClick={handleNext}
        disabled={!(checked && isCorrect)}
        style={{ marginLeft: 10 }}
      >
        Следующее предложение
      </button>

      <button onClick={handlePrevClick} style={{ marginLeft: 10 }}>
        Назад
      </button>

      {attemptCount >= 3 && !showAnswer && (
        <button onClick={handleShowAnswer} style={{ marginLeft: 10 }}>
          Показать правильный ответ
        </button>
      )}

      {warning && <p style={{ color: 'orange' }}>{warning}</p>}
      {checked && !isCorrect && <p style={{ color: 'red' }}>Неверно, попробуйте ещё раз.</p>}
      {checked && isCorrect && <p style={{ color: 'green' }}>Верно!</p>}
      {showAnswer && (
        <p style={{ color: 'blue', marginTop: '10px' }}>
          Правильный ответ: <b>{verb.verb}</b>
        </p>
      )}
    </div>
  );
};

export default PhrasalVerbTask;
