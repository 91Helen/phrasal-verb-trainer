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
    const correct = verb.requiresPast ? trimmed.toLowerCase() === verb.pastForm.toLowerCase() : trimmed.toLowerCase() === verb.verb.toLowerCase();
    setChecked(true);
    setIsCorrect(correct);

    if (correct) onAnswer(true, false);
    else { setAttemptCount(prev => prev + 1); onAnswer(false, false); }
  };

  const handleNext = () => {
    if (checked && isCorrect) {
      setUserInput(''); setChecked(false); setIsCorrect(false); setShowAnswer(false); setAttemptCount(0);
      onAnswer(true, true);
    }
  };

  return (
    <div>
      <p><i>Вставьте правильный глагол:</i></p>
      <p>{verb.exampleWithGap}</p>
      <input value={userInput} onChange={e => setUserInput(e.target.value)} disabled={checked && isCorrect} />
      <button onClick={handleCheck} disabled={checked && isCorrect}>Проверить</button>
      <button onClick={handleNext} disabled={!(checked && isCorrect)}>Следующее</button>
      <button onClick={onPrev}>Назад</button>

      {attemptCount >= 3 && !showAnswer && <button onClick={() => setShowAnswer(true)}>Показать ответ</button>}
      {warning && <p style={{color:'orange'}}>{warning}</p>}
      {checked && !isCorrect && <p style={{color:'red'}}>Неверно</p>}
      {checked && isCorrect && <p style={{color:'green'}}>Верно!</p>}
      {showAnswer && <p style={{color:'blue'}}>Правильный ответ: {verb.requiresPast ? verb.pastForm : verb.verb}</p>}
    </div>
  );
};

export default PhrasalVerbTask;
