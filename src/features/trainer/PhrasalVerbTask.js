import React, { useState } from 'react';

const PhrasalVerbTask = ({ verb, onAnswer, onPrev }) => {
  const [userInput, setUserInput] = useState('');
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [warning, setWarning] = useState('');

  const containsCyrillic = (text) => /[а-яё]/i.test(text);

  const handleCheck = () => {
    const trimmed = userInput.trim();
    if (!trimmed) { setWarning('Введите ответ'); return; }
    if (containsCyrillic(trimmed)) { setWarning('Используйте английскую раскладку'); return; }

    setWarning('');
    const correct = verb.requiresPast
      ? trimmed.toLowerCase() === verb.pastForm.toLowerCase()
      : trimmed.toLowerCase() === verb.verb.toLowerCase();

    setChecked(true);
    setIsCorrect(correct);

    if (correct) onAnswer(true, false);
    else {
      setAttemptCount(prev => prev + 1);
      onAnswer(false, false);
    }
  };

  const handleNext = () => {
    if (checked && isCorrect) {
      resetState();
      onAnswer(true, true);
    }
  };

  const handlePrev = () => {
    resetState();
    onPrev();
  };

  const resetState = () => {
    setUserInput('');
    setChecked(false);
    setIsCorrect(false);
    setShowAnswer(false);
    setAttemptCount(0);
    setWarning('');
  };

  const renderExample = () => {
    if (checked && isCorrect) {
      const correctWord = verb.requiresPast ? verb.pastForm : verb.verb;
      return (
        <span>
          {verb.exampleWithGap.replace(/_+/g, correctWord)}{' '}
          <span style={{ color: 'green' }}>✅</span>
        </span>
      );
    }
    return verb.exampleWithGap;
  };

  return (
    <div className="task-wrapper">
      <p>
        <i>
          Напиши правильный фразовый глагол в верной временной форме.<br />
          Если три попытки неверны — воспользуйся подсказкой 💡👉.
        </i>
      </p>

      <p>{renderExample()}</p>

      {/* Enter работает как кнопка Проверить */}
      <input
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
        disabled={checked && isCorrect}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleCheck();
          }
        }}
      />

      <div className="trainer-buttons">
        <button onClick={handleCheck} disabled={checked && isCorrect}>
          Проверить
        </button>

        <button onClick={handleNext} disabled={!(checked && isCorrect)}>
          Следующее
        </button>

        <button onClick={handlePrev}>
          Назад
        </button>
      </div>

      {attemptCount >= 3 && !showAnswer && (
        <div className="hint-box">
          У тебя уже 3 попытки. Можешь открыть подсказку 👇
          <br />
          <button
            onClick={() => setShowAnswer(true)}
            className="btn-primary"
            style={{ marginTop: '10px' }}
          >
            Показать ответ
          </button>
        </div>
      )}

      {/* Жёлтые фразы */}
      {warning && <p className="warning yellow-hint">{warning}</p>}
      {checked && !isCorrect && <p className="incorrect">Неверно</p>}
      {checked && isCorrect && <p className="correct">Верно!</p>}

      {showAnswer && (
        <p className="answer yellow-hint">
          Правильный ответ: {verb.requiresPast ? verb.pastForm : verb.verb}
        </p>
      )}
    </div>
  );
};

export default PhrasalVerbTask;
