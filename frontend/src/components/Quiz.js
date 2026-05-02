import { useState } from 'react';

function Quiz() {

  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const checkAnswer = (answer) => {

    if (answered) return;

    if (answer === '18') {
      setScore(score + 1);
    }

    setAnswered(true);
  };

  return (
    <div className="card">

      <h2>🎮 Quick Quiz</h2>

      <p>
        What is the minimum voting age in many democracies?
      </p>

      <div className="quiz-option">
        <button onClick={() => checkAnswer('16')}>
          16
        </button>
      </div>

      <div className="quiz-option">
        <button onClick={() => checkAnswer('18')}>
          18
        </button>
      </div>

      <div className="quiz-option">
        <button onClick={() => checkAnswer('21')}>
          21
        </button>
      </div>

      {
        answered && (
          <div>
            <h3>Your Score: {score}</h3>
          </div>
        )
      }

    </div>
  );
}

export default Quiz;
