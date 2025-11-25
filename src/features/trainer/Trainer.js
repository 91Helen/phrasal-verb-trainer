import React, { useState, useEffect } from 'react';
import PhrasalVerbTask from './PhrasalVerbTask';

const Trainer = ({ verbs, currentIndex, onAnswer }) => {
  const [taskType, setTaskType] = useState(2);
  const [options, setOptions] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(null);
  const [isWaitingNext, setIsWaitingNext] = useState(false);

  // ответы пользователя для всех заданий
  const [savedAnswers, setSavedAnswers] = useState({});

  const currentVerb = verbs[currentIndex];

  const shuffleArray = arr => arr.sort(() => Math.random()-0.5);

  useEffect(() => {
    if (!currentVerb) return;

    // предыдущий ответ, если он был
    if (savedAnswers[currentVerb.id]) {
      const ans = savedAnswers[currentVerb.id];
      setSelectedIdx(ans.selectedIdx ?? null);
      setAnsweredCorrectly(ans.answeredCorrectly ?? null);
    } else {
      setSelectedIdx(null);
      setAnsweredCorrectly(null);
    }

    setIsWaitingNext(false);

    // варианты для упражнения №1
    const wrong = shuffleArray(
      verbs.filter(v => v.id !== currentVerb.id).map(v => v.translation)
    ).slice(0,2);
    setOptions(shuffleArray([currentVerb.translation, ...wrong]));
  }, [currentIndex, verbs, savedAnswers, currentVerb]);

  const handleClickOption = (opt, idx) => {
    if (isWaitingNext) return;
    const correct = opt === currentVerb.translation;
    setSelectedIdx(idx);
    setAnsweredCorrectly(correct);
    setIsWaitingNext(true);

    setSavedAnswers(prev => ({
      ...prev,
      [currentVerb.id]: { selectedIdx: idx, answeredCorrectly: correct }
    }));

    setTimeout(() => {
      onAnswer(correct, true);
      setIsWaitingNext(false);
    }, 700);
  };

  const handleTask3Answer = (isCorrect, nextStep) => {
    if (!savedAnswers[currentVerb.id]) {
      setSavedAnswers(prev => ({
        ...prev,
        [currentVerb.id]: { answeredCorrectly: isCorrect }
      }));
    } else {
      setSavedAnswers(prev => ({
        ...prev,
        [currentVerb.id]: { ...prev[currentVerb.id], answeredCorrectly: isCorrect }
      }));
    }

    onAnswer(isCorrect, nextStep);
  };

  return (
    <div style={{padding:20}}>
      <h2>Тренажёр фразовых глаголов</h2>

      <div style={{marginBottom:20}}>
        <button
          onClick={()=>!isWaitingNext&&setTaskType(2)}
          style={{
            marginRight:10,
            backgroundColor:taskType===2?'#4CAF50':'initial',
            color:taskType===2?'white':'initial',
            border:'1px solid #4CAF50',
            padding:'8px 16px',
            cursor:isWaitingNext?'not-allowed':'pointer'
          }}
          disabled={isWaitingNext}
        >
          Упражнение №1 <br/>Укажи верный перевод
        </button>

        <button
          onClick={()=>!isWaitingNext&&setTaskType(3)}
          style={{
            backgroundColor:taskType===3?'#4CAF50':'initial',
            color:taskType===3?'white':'initial',
            border:'1px solid #4CAF50',
            padding:'8px 16px',
            cursor:isWaitingNext?'not-allowed':'pointer'
          }}
          disabled={isWaitingNext}
        >
          Упражнение №2<br/>Используй в предложении
        </button>
      </div>

      {taskType===2 && <>
        <h3>{currentVerb.verb}</h3>
        <p><i>Выбери верный перевод 👉✔️:</i></p>
        {options.map((opt,idx)=>(
          <button
            key={idx}
            onClick={()=>handleClickOption(opt,idx)}
            style={{
              display:'block',
              margin:'10px 0',
              padding:'10px 15px',
              width:'250px',
              textAlign:'left',
              backgroundColor:selectedIdx===idx?(answeredCorrectly?'green':'red'):'initial',
              color:selectedIdx===idx?'white':'initial',
              cursor:isWaitingNext?'not-allowed':'pointer'
            }}
            disabled={isWaitingNext}
          >
            {opt}
          </button>
        ))}
      </>}

      {taskType===3 &&
        <PhrasalVerbTask
          verb={currentVerb}
          onAnswer={handleTask3Answer}
          onPrev={()=>handleTask3Answer(false,"prev")}
          savedAnswer={savedAnswers[currentVerb.id]}
        />
      }

      <p style={{marginTop:20}}>Прогресс: {currentIndex+1} / {verbs.length}</p>
    </div>
  );
};

export default Trainer;
