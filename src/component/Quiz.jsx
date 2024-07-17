
import React, { useState } from 'react';
import './Quiz.css'

const questions = [
  {
    questionText: 'How many times has India won the Cricket World Cup?',
    answerOptions: [
      { answerText: '4', isCorrect: false },
      { answerText: '3', isCorrect: false },
      { answerText: '5', isCorrect: true },
      { answerText: '8', isCorrect: false },
    ],
  },
  {
    questionText: 'Which Indian cricketer is also known as the “God of Cricket”?',
    answerOptions: [
      { answerText: 'Hardik', isCorrect: false },
      { answerText: 'Virat', isCorrect: false },
      { answerText: 'Sachin Tendulkar', isCorrect: true },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: '3. What is the moniker given to the Indian cricket team?',
    answerOptions: [
      { answerText: 'Men in blue', isCorrect: true },
      { answerText: 'indian army', isCorrect: false },
      { answerText: 'blackcaps', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: '7. Who is the current T20 Captain of the Indian National Men’s Cricket Team?',
    answerOptions: [
      { answerText: 'Virat', isCorrect: false },
      { answerText: 'Rohit', isCorrect: false },
      { answerText: 'Dhoni', isCorrect: false },
      { answerText: 'Hardik', isCorrect: true },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
