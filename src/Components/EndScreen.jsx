import React, { useContext, useState } from 'react'
import { QuizContext } from '../Helpers/Context';
import { Questions } from './Quiz';

const EndScreen = () => {
  const {gameState, setGameState, score, setScore} = useContext(QuizContext);
  
  const restartQuiz = () => {
    setScore(0);
    setGameState('menu')
  }
  return (
    <div className='EndScreen'>
      <h1>Quiz Finished</h1>
      <h3>
        {score} / {Questions.length}
      </h3>

      <button onClick={() => restartQuiz()} className='restart-btn'>Restart</button>
    </div>
  )
}

export default EndScreen