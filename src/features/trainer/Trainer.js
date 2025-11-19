import React, { useState, useEffect } from 'react';
import PhrasalVerbTask from './PhrasalVerbTask';

const Trainer = ({ verbs, currentIndex, onAnswer }) => {
  const [options, setOptions] = useState([]);
  const [taskType, setTaskType] = useState(2);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(null);
  const [isWaitingNext, setIsWaitingNext] = useState(false);

  const currentVerb = verbs[currentIndex];

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  useEffect(() => {
    if (!currentVerb) return;

    setSelectedOptionIndex(null);
    setAnsweredCorrectly(null);
    setIsWaitingNext(false);

    const wrongOptions = shuffleArray(
      verbs.filter(v => v.id !== currentVerb.id).map(v => v.translation)
    ).slice(0, 2);

    setOptions(shuffleArray([currentVerb.translation, ...wrongOptions]));
  }, [currentIndex, verbs, currentVerb]);

  if (!currentVerb) return <div>Нет глаголов для тренировки</div>;

  // --- выбор перевода ---
  const handleOptionClick = (option, index) => {
    if (isWaitingNext) return;

    const isCorrect = option === currentVerb.translation;
    setSelectedOptionIndex(index);
    setAnsweredCorrectly(isCorrect);
    setIsWaitingNext(true);

    // сначала считаем статистику
    onAnswer(isCorrect, false);

    // затем переключаем с небольшим таймаутом
    setTimeout(() => {
      if (isCorrect) onAnswer(isCorrect, true);
      setIsWaitingNext(false);
    }, 700);
  };

  const optionButtonStyle = (index) => {
    if (selectedOptionIndex === index) {
      return {
        backgroundColor: answeredCorrectly ? 'green' : 'red',
        color: 'white',
        display: 'block',
        margin: '10px 0',
        padding: '10px 15px',
        width: '250px',
        textAlign: 'left',
        cursor: 'default'
      };
    }
    return {
      display: 'block',
      margin: '10px 0',
      padding: '10px 15px',
      width: '250px',
      textAlign: 'left',
      cursor: isWaitingNext ? 'not-allowed' : 'pointer'
    };
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Тренажёр фразовых глаголов</h2>

      <div style={{ marginBottom: 20 }}>
        <button
          onClick={() => !isWaitingNext && setTaskType(2)}
          style={{
            marginRight: 10,
            backgroundColor: taskType === 2 ? '#4CAF50' : 'initial',
            color: taskType === 2 ? 'white' : 'initial',
            border: '1px solid #4CAF50',
            padding: '8px 16px',
            cursor: isWaitingNext ? 'not-allowed' : 'pointer'
          }}
          disabled={isWaitingNext}
        >
          Выбрать перевод
        </button>

        <button
          onClick={() => !isWaitingNext && setTaskType(3)}
          style={{
            backgroundColor: taskType === 3 ? '#4CAF50' : 'initial',
            color: taskType === 3 ? 'white' : 'initial',
            border: '1px solid #4CAF50',
            padding: '8px 16px',
            cursor: isWaitingNext ? 'not-allowed' : 'pointer'
          }}
          disabled={isWaitingNext}
        >
          Использовать в предложении
        </button>
      </div>

      {taskType === 2 && (
        <>
          <h3>{currentVerb.verb}</h3>
          <p><i>Выберите правильный перевод:</i></p>

          {options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(option, idx)}
              style={optionButtonStyle(idx)}
              disabled={isWaitingNext}
            >
              {option}
            </button>
          ))}
        </>
      )}

      {taskType === 3 && (
        <PhrasalVerbTask
          verb={currentVerb}
          onAnswer={onAnswer}
          onPrev={() => onAnswer(false, "prev")}
        />
      )}

      <p style={{ marginTop: 20 }}>
        Прогресс: {currentIndex + 1} / {verbs.length}
      </p>
    </div>
  );
};

export default Trainer;
